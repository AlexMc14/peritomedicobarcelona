// Rastrea dist/ como un buscador (BFS de <a href> internos desde la home) y falla si
// alguna URL del sitemap no es alcanzable, está a más de MAX_PROFUNDIDAD clics, hay
// enlaces internos rotos o una página a 2+ clics tiene menos de MIN_ENTRANTES enlaces entrantes.
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const DIST = new URL('../dist/', import.meta.url);
const MAX_PROFUNDIDAD = 3;
const MIN_ENTRANTES = 3;

const leer = (ruta) => readFileSync(new URL('.' + ruta, DIST), 'utf8');
const fichero = (path) => (path.endsWith('/') ? path + 'index.html' : path);

const sitemaps = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
const enSitemap = sitemaps.flatMap((f) =>
  [...leer('/' + f).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname),
);

const profundidad = new Map([['/', 0]]);
const entrantes = new Map();
const rotos = [];
const cola = ['/'];
while (cola.length) {
  const origen = cola.shift();
  const html = leer(fichero(origen));
  const destinos = new Set(
    [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((h) => h.startsWith('/') && !h.startsWith('//'))
      .map((h) => h.split(/[?#]/)[0]),
  );
  for (const destino of destinos) {
    if (destino === origen) continue;
    if (!existsSync(new URL('.' + fichero(destino), DIST))) {
      rotos.push(`${origen} → ${destino}`);
      continue;
    }
    if (!entrantes.has(destino)) entrantes.set(destino, new Set());
    entrantes.get(destino).add(origen);
    if (!profundidad.has(destino)) {
      profundidad.set(destino, profundidad.get(origen) + 1);
      cola.push(destino);
    }
  }
}

const errores = [
  ...rotos.map((r) => `Enlace roto: ${r}`),
  ...enSitemap.filter((u) => !profundidad.has(u)).map((u) => `Huérfana (no alcanzable desde /): ${u}`),
  ...enSitemap
    .filter((u) => profundidad.get(u) > MAX_PROFUNDIDAD)
    .map((u) => `A ${profundidad.get(u)} clics: ${u}`),
  ...enSitemap
    .filter((u) => profundidad.get(u) >= 2 && (entrantes.get(u)?.size ?? 0) < MIN_ENTRANTES)
    .map((u) => `Solo ${entrantes.get(u)?.size ?? 0} enlaces entrantes: ${u}`),
];

const alcanzables = enSitemap.filter((u) => profundidad.has(u)).length;
const maxProf = Math.max(...enSitemap.map((u) => profundidad.get(u) ?? 0));
console.log(`check-enlazado: ${alcanzables}/${enSitemap.length} alcanzables, profundidad máxima ${maxProf}`);
for (const u of enSitemap.filter((u) => profundidad.get(u) >= 2)) {
  console.log(`  prof ${profundidad.get(u)}  entrantes ${entrantes.get(u).size}  ${u}`);
}
if (!enSitemap.length) errores.push('No se ha encontrado ninguna URL en el sitemap');
if (errores.length) {
  console.error(errores.join('\n'));
  process.exit(1);
}
