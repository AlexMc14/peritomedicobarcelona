// /llms.txt (https://llmstxt.org): resumen del sitio para modelos de lenguaje. Se genera desde
// los mismos registros que el menú y el footer, así que una página nueva aparece aquí sola.
import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { servicios, abogados, especialidades } from '../data/servicios';
import { zonas, HUB_ZONAS } from '../data/zonas';
import { posts } from '../data/posts';

const abs = (href: string) => new URL(href, SITE.url).href;
const linea = (nombre: string, href: string, nota?: string) => `- [${nombre}](${abs(href)})${nota ? `: ${nota}` : ''}`;

export const GET: APIRoute = () => {
  const texto = `# ${SITE.nombre}

> Servicio independiente de peritaje médico en Barcelona, su área metropolitana y el resto de Cataluña. Elabora informes periciales médicos para juzgados, aseguradoras, el INSS y mutuas (daño corporal, negligencia médica, incapacidad permanente, altas médicas, discapacidad, accidentes de tráfico y de trabajo) y los ratifica en juicio. La primera valoración se hace por teléfono.

Contacto: teléfono y WhatsApp ${SITE.telefono}, correo ${SITE.email}. La web es privada e independiente: no pertenece al INSS, al ICAM/SGAM, a ninguna mutua ni a ningún juzgado.

## Servicios
${servicios.map((s) => linea(s.nombre, s.href, s.descripcion)).join('\n')}

## Para abogados
${abogados.map((a) => linea(a.nombre, a.href, a.descripcion)).join('\n')}

## Guías
${posts.map((p) => linea(p.titulo, p.href, p.descripcion)).join('\n')}

## Zonas
${linea('Área metropolitana de Barcelona', HUB_ZONAS)}
${zonas.map((z) => linea(`Perito médico en ${z.nombre}`, z.href)).join('\n')}

## Optional
${especialidades.filter((e) => !e.href.includes('#')).map((e) => linea(`Peritaje en ${e.nombre}`, e.href)).join('\n')}
${linea('Preguntas frecuentes', '/preguntas-frecuentes/')}
${linea('Sobre nosotros y autoría', '/sobre-nosotros/')}
${linea('Cómo trabajamos (metodología y normativa)', '/metodologia/')}
${linea('Política editorial', '/politica-editorial/')}
${linea('Contacto', '/contacto/')}
`;
  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
