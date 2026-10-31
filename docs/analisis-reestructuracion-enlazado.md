# Análisis de arquitectura y enlazado interno — peritomedicobarcelona.com

Fecha: 2026-10-31 · Rama analizada: `master` (dc8875b) · Solo lectura (build en `/tmp/pmb-dist`).

Método: build de Astro fuera del repo y rastreo BFS desde `/` siguiendo solo `<a href>` internos, como haría un buscador. El mismo rastreo se repitió contra producción (`https://www.peritomedicobarcelona.com/`) y contra el sitemap publicado. **Producción y build coinciden al 100 %** (mismas 63 URLs, mismas profundidades, todas con 200). Search Console no se pudo consultar porque el MCP no está autenticado, así que no hay datos de indexación ni de clics por URL.

---

## 1. Resumen en cifras

| Métrica | Valor |
|---|---|
| Ficheros `.astro` en `src/pages` | 63 (sin rutas dinámicas ni content collections) |
| URLs en el build | 63 |
| URLs en `sitemap-0.xml` (prod) | 63 (todas, incluida `/gracias/`) |
| URLs alcanzables desde la home | **51 (81 %)** |
| URLs huérfanas (solo llegan por el sitemap) | **12 (19 %)** |
| URLs a más de 3 clics | 0 |
| URLs a 3 clics exactos | 1 |
| Enlaces internos rotos (404) | 0 |
| Enlaces sin barra final (redirección 308) | 0 |
| Canónicas | 63/63 autorreferenciadas y correctas |
| `noindex` | ninguno (tampoco en `/gracias/`) |

### Distribución por profundidad de clic

| Profundidad | URLs |
|---|---|
| 0 (home) | 1 |
| 1 | 34 |
| 2 | 15 |
| 3 | 1 |
| Inalcanzable | 12 |

La profundidad no es el problema: lo que se enlaza queda a 1–2 clics porque el header y el footer están en todas las páginas. **El problema es binario: o una URL está en el menú o el footer, o no la enlaza nadie.**

---

## 2. Inventario completo y profundidad

`Entr.` = número de páginas que la enlazan. Con 62 entrantes, la URL está en el header o el footer global.

### Huérfanas (no alcanzables desde la home) — 12

| URL | Entr. | Quién la enlaza | Tipo |
|---|---|---|---|
| `/perito-medico-consulta-gratuita/` | 0 | — | Landing de captación |
| `/negligencia-medica-consulta-gratuita/` | 1 | `/perito-medico-sarria-sant-gervasi/` (huérfana) | Landing de captación |
| `/valoracion-dano-corporal-gratuita/` | 1 | `/perito-medico-sarria-sant-gervasi/` (huérfana) | Landing de captación |
| `/incapacidad-permanente-consulta-gratuita/` | 0 | — | Landing de captación |
| `/accidente-trabajo-gratuita/` | 0 | — | Landing de captación |
| `/determinacion-contingencia-gratuita/` | 0 | — | Landing de captación |
| `/revision-alta-medica-gratuita/` | 0 | — | Landing de captación |
| `/segunda-opinion-medico-legal-gratuita/` | 0 | — | Landing de captación |
| `/valoracion-discapacidad-gratuita/` | 0 | — | Landing de captación |
| `/perito-medico-eixample/` | 0 | — | Local (barrio BCN) |
| `/perito-medico-sarria-sant-gervasi/` | 0 | — | Local (barrio BCN) |
| `/gracias/` | 0 | — | Página de agradecimiento (no debería indexarse) |

Las 12 están en el sitemap XML, así que **las 12 solo se descubren por el sitemap**. Ninguna recibe enlazado de una página alcanzable: los dos únicos enlaces que existen salen de otra huérfana (Sarrià).

### Alcanzables a profundidad 2–3 — 16

| URL | Prof. | Entr. | Ruta de llegada |
|---|---|---|---|
| `/servicios/perito-seguridad-social/` | **3** | 7 | home → `/blog/` → post → servicio (solo la enlazan los posts, los informes y las landings huérfanas) |
| `/servicios/accidente-trabajo/` | 2 | 17 | desde las fichas locales (`LocalLayout`) y `/especialidades/`; no está en el menú |
| `/especialidades/traumatologia/` | 2 | 2 | solo desde `/especialidades/` |
| `/especialidades/neurologia/` | 2 | 1 | solo desde `/especialidades/` |
| `/especialidades/psiquiatria/` | 2 | 1 | solo desde `/especialidades/` |
| `/perito-medico-sant-cugat/` | 2 | 1 | solo desde `/perito-medico-area-metropolitana/` |
| `/perito-medico-sant-boi/` | 2 | 1 | ídem |
| `/perito-medico-el-prat/` | 2 | 1 | ídem |
| `/perito-medico-viladecans/` | 2 | 1 | ídem |
| `/perito-medico-granollers/` | 2 | 1 | ídem |
| `/perito-medico-mollet/` | 2 | 1 | ídem |
| `/blog/como-reclamar-negligencia-medica-barcelona/` | 2 | 1 | solo desde `/blog/` |
| `/blog/perito-medico-incapacidad-permanente/` | 2 | 1 | solo desde `/blog/` |
| `/blog/cuanto-cuesta-perito-medico-barcelona/` | 2 | 13 | `/blog/` + fichas locales |
| `/informes/precios-plazos-informe-pericial-2026/` | 2 | 15 | `/blog/` + fichas locales + urgente |
| `/informes/tipos-informe-pericial-medico-2026/` | 2 | 14 | `/blog/` + fichas locales |

### Profundidad 1 (en header o footer global, 62 entrantes) — 34

Home, `/contacto/`, `/sobre-nosotros/`, `/preguntas-frecuentes/`, `/blog/`, `/especialidades/`, legales (3), 11 de `/servicios/*` (todas menos `accidente-trabajo` y `perito-seguridad-social`), `/accidente-laboral/`, `/accidentes-de-trafico/`, `/perito-medico-para-seguros/`, las 4 de `/para-abogados/*`, `/perito-medico-area-metropolitana/`, 6 fichas locales (Hospitalet, Badalona, Sabadell, Terrassa, Cornellà, Mataró), `/perito-medico-juzgado-social-barcelona/` e `/informe-pericial-urgente-barcelona/`.

---

## 3. Enlaces rotos, redirecciones, canónicas y noindex

| Hallazgo | Detalle | Impacto |
|---|---|---|
| Enlaces internos rotos | 0. Los 9 anclajes `/especialidades/#…` del menú existen en la página. | — |
| Barra final | `trailingSlash: 'always'` + `url()` en `src/utils/links.ts`; ningún enlace interno provoca 308. `/contacto` → 308 → `/contacto/`. | OK |
| Canónicas | 63/63 autorreferenciadas con `https://www.` y barra final. | OK |
| **`/gracias/` indexable y en el sitemap** | Sin `noindex` y listada en `sitemap-0.xml`. | Página fina indexable; contamina el sitemap. |
| **Dominio sin www por HTTPS** | `https://peritomedicobarcelona.com/` falla con un error de certificado: el certificado solo cubre `www` (*subjectAltName does not match*). | Cualquier enlace externo o usuario que entre por el dominio sin www en HTTPS no llega. |
| DNS del dominio sin www | Dos registros A: `76.76.21.21` (Vercel) y `31.214.178.55` (otro proveedor). `http://peritomedicobarcelona.com/` → **302** (temporal) a `www`. | Resolución inconsistente; debería ser un 301/308 servido solo por Vercel. |
| Hubs inexistentes | `/servicios/`, `/para-abogados/` e `/informes/` devuelven 404. La miga «Servicios» de `ServiceLayout` apunta a `/#servicios`. | Los directorios no tienen página padre; las migas no forman jerarquía. |
| Breadcrumbs | Visuales en `ServiceLayout`, `LocalLayout` y `BlogPostLayout`; **no las hay** en las 24 páginas sobre `Layout` (landings gratuitas, Eixample, Sarrià, `/especialidades/*`). Ninguna página emite `BreadcrumbList` en JSON-LD. | Poca señal de jerarquía. |
| Canibalización | `/accidente-laboral/` (en el menú) y `/servicios/accidente-trabajo/` (fuera del menú) atacan la misma intención: «Perito Médico Accidente Laboral/de Trabajo Barcelona». Pasa algo parecido con `/servicios/perito-seguridad-social/` frente a `/servicios/incapacidad-laboral/`. | Dos URLs compitiendo por la misma consulta. |
| Menú de especialidades | El menú enlaza 9 anclajes `/especialidades/#x` y no las 3 páginas reales `/especialidades/{traumatologia,neurologia,psiquiatria}/`. | Las páginas reales quedan a 2 clics con un solo enlace entrante. |
| `/perito-medico-area-metropolitana/` | Su lista de localidades no incluye Eixample ni Sarrià. | Es la causa directa de que esas dos fichas sean huérfanas. |

---

## 4. Comparación con Cádiz (peritomedicocadiz.es)

Rastreo de producción (`https://www.peritomedicocadiz.es/`): **29 URLs, 29 alcanzables, 0 huérfanas, profundidad máxima 2** (17 a 1 clic y 11 a 2 clics).

| Patrón | Cádiz | Barcelona |
|---|---|---|
| **Fuente de datos única** para localidades y servicios | `src/data/ciudades.ts` y `src/data/especialidades.ts` alimentan el footer, `CiudadesGrid` y `EspecialidadesGrid`. Una ciudad nueva aparece sola en todas partes. | Listas copiadas a mano en `Header.astro`, `Footer.astro`, `ServiceLayout`, `LocalLayout`, `BlogPostLayout` y `perito-medico-area-metropolitana.astro`. Cada página nueva hay que añadirla en N sitios y se olvida (Eixample, Sarrià y 6 localidades fuera del footer). |
| **Todas las localidades enlazadas** desde la home y el footer | `CiudadesGrid` en la home (excluye la propia en cada ficha) y las 10 ciudades en el footer. | El footer enlaza 6 de 14 fichas locales (+ el hub). La home no tiene rejilla de localidades. |
| **Par servicio ↔ landing gratuita** | Cada `/especialidades/<servicio>/` enlaza su `-consulta-gratuita` («¿Prefiere una respuesta rápida?»), y cada landing (`LandingIntencion`, prop `enlaceServicio`) enlaza de vuelta a su servicio. El commit `0cb40b0` («enlaza landings huérfanas») cerró justo este hueco. | Las 9 landings gratuitas no las enlaza ningún servicio. Algunas enlazan hacia fuera (a `/servicios/*`), pero no reciben nada. |
| **Blog → landing** | Cada post enlaza a la landing gratuita de su tema. | Los posts enlazan a servicios, no a landings. |
| **Breadcrumb como componente** | `Breadcrumb.astro` en los 4 layouts (`Especialidad`, `Ciudad`, `Landing`, `BlogPost`), con migas tipadas (`Miga`). | Migas pegadas a mano en 3 layouts y ausentes en `Layout`; «Servicios» apunta a `/#servicios`. |
| **Hub real por tipo** | `/especialidades/` es un índice real de servicios; las ciudades cuelgan de la home. | No existe `/servicios/` ni `/para-abogados/`; `/especialidades/` mezcla especialidades médicas con anclajes. |
| **Header mínimo** | 4 enlaces (Inicio, Especialidades, Blog, Contacto); el enlazado profundo lo hacen la home, las rejillas y el footer. | Megamenú con 13 servicios, 9 anclajes y 4 páginas de abogados, pero sin localidades ni landings. |

Nota aparte sobre Cádiz: sus canónicas apuntan a `https://peritomedicocadiz.es/` (sin www) mientras el dominio sin www redirige con 308 a `www`. Canónica y URL servida no coinciden. No afecta a este análisis, pero conviene corregirlo allí.

**Conclusión:** lo que falta en Barcelona es el patrón de Cádiz de *datos centralizados + rejillas automáticas + par servicio↔landing + breadcrumb único*. No hace falta tocar ninguna URL.

---

## 5. Propuesta de reestructuración

### 5.1 Árbol objetivo (sin cambiar ninguna URL indexada)

```
/ (home)
├── /servicios/                           [NUEVO hub, hoy 404]
│   ├── /servicios/informes-periciales-medicos/
│   ├── /servicios/negligencia-medica/ ─────────── ↔ /negligencia-medica-consulta-gratuita/
│   ├── /servicios/valoracion-dano-corporal/ ───── ↔ /valoracion-dano-corporal-gratuita/
│   ├── /servicios/incapacidad-laboral/ ────────── ↔ /incapacidad-permanente-consulta-gratuita/
│   │     └── /servicios/perito-seguridad-social/ (enlazar desde aquí; valorar fusión)
│   ├── /servicios/impugnacion-alta-medica/ ────── ↔ /revision-alta-medica-gratuita/
│   ├── /servicios/discapacidad/ ───────────────── ↔ /valoracion-discapacidad-gratuita/
│   ├── /servicios/determinacion-contingencia/ ─── ↔ /determinacion-contingencia-gratuita/
│   ├── /servicios/segunda-opinion-medico-legal/ ─ ↔ /segunda-opinion-medico-legal-gratuita/
│   ├── /servicios/accidente-trabajo/ ──────────── ↔ /accidente-trabajo-gratuita/
│   │     (decidir canónica frente a /accidente-laboral/, ver 5.3)
│   ├── /servicios/curatela-medidas-apoyo/, /servicios/estudio-viabilidad/
│   ├── /accidente-laboral/, /accidentes-de-trafico/, /perito-medico-para-seguros/
│   └── /perito-medico-consulta-gratuita/ (landing genérica: desde el hub y la home)
├── /perito-medico-area-metropolitana/    [hub de zonas: TODAS las fichas]
│   ├── Barcelona ciudad: /perito-medico-eixample/, /perito-medico-sarria-sant-gervasi/
│   ├── 12 municipios (Hospitalet … Mollet)
│   └── /perito-medico-juzgado-social-barcelona/, /informe-pericial-urgente-barcelona/
├── /especialidades/                      [hub de especialidades médicas]
│   └── /especialidades/{traumatologia,neurologia,psiquiatria}/ (enlace real, no anclaje)
├── /para-abogados/                       [NUEVO hub, hoy 404]
│   └── asesoramiento-tecnico, contrainforme-pericial, ratificacion-judicial, revision-informes
├── /blog/
│   ├── 3 posts  → cada uno enlaza su landing gratuita y su servicio
│   └── /informes/* (2)
├── /sobre-nosotros/, /preguntas-frecuentes/, /contacto/
└── legales (3)        /gracias/ → noindex y fuera del sitemap
```

Objetivo medible: **62/62 URLs indexables alcanzables (100 %), profundidad máxima 2** (hoy 51/63 y 3), con al menos 3 enlaces entrantes cada una.

### 5.2 Ficheros a tocar, en orden

| # | Cambio | Ficheros | Desbloquea | Riesgo |
|---|---|---|---|---|
| 1 | **Centralizar listas** en `src/data/servicios.ts` (servicio + landing gratuita asociada), `src/data/zonas.ts` (14 fichas) y `src/data/abogados.ts`, como en Cádiz. | nuevos en `src/data/` | Base de todo lo demás | Nulo: sin cambios visibles |
| 2 | **Par servicio ↔ landing**: en `ServiceLayout`, el bloque «¿Prefiere una consulta gratuita?» enlaza la landing del servicio (prop o lookup en `servicios.ts`). En las landings, el enlace de vuelta al servicio. | `src/layouts/ServiceLayout.astro`, 9 landings `*-gratuita.astro` | **9 huérfanas** pasan a profundidad 2 | Bajo |
| 3 | **Hub de zonas completo**: `/perito-medico-area-metropolitana/` lee `zonas.ts` (añade Eixample y Sarrià). El footer enlaza las 14 fichas, o el hub + las 6 principales + «Barcelona ciudad». | `perito-medico-area-metropolitana.astro`, `Footer.astro`, `LocalLayout.astro` (rejilla de «otras zonas», excluyendo la propia) | **2 huérfanas** a profundidad 2; 6 localidades pasan de 1 a ≥13 entrantes | Bajo |
| 4 | **`/gracias/` noindex** + excluirla del sitemap (`sitemap({ filter: p => !p.includes('/gracias/') })`). | `src/pages/gracias.astro` (o prop en `Layout`), `astro.config.mjs` | Limpia la huérfana restante | Nulo |
| 5 | **Home**: rejilla de zonas + rejilla de servicios desde los datos + CTA a `/perito-medico-consulta-gratuita/`. | `src/pages/index.astro` | Todo a ≤2 clics desde la home | Bajo (cambio visual) |
| 6 | **Hubs nuevos** `/servicios/` y `/para-abogados/` (páginas índice nuevas; hoy son 404, así que no hay URL indexada en riesgo). Apuntar a ellos la miga «Servicios» y el enlace «Para Abogados» del footer. | `src/pages/servicios/index.astro`, `src/pages/para-abogados/index.astro`, `Footer.astro`, `ServiceLayout.astro` | Jerarquía clara para las migas | Bajo |
| 7 | **Menú**: el desplegable de Especialidades enlaza las 3 páginas reales (y deja los anclajes para las que no tienen página); añadir «Zonas» → hub de zonas; `/servicios/accidente-trabajo/` y `/servicios/perito-seguridad-social/` en la lista de servicios o enlazadas desde su servicio padre. | `src/components/Header.astro` | Especialidades y seguridad social pasan de 2–3 clics a 1 | Bajo |
| 8 | **`Breadcrumb.astro` único** con `BreadcrumbList` JSON-LD, usado en Service, Local, BlogPost y también en las páginas sobre `Layout` (landings y especialidades). | nuevo `src/components/Breadcrumb.astro`, 3 layouts + páginas sobre `Layout` | Señal de jerarquía + rich results | Bajo |
| 9 | **Relacionados en el blog**: cada post enlaza su landing gratuita y su servicio (patrón de Cádiz). La caja «Servicios relacionados» de `BlogPostLayout` sale de `servicios.ts`. | `BlogPostLayout.astro`, 3 posts | Más enlaces entrantes a las landings | Nulo |
| 10 | **Sitemap HTML** opcional (`/mapa-web/` generado desde los `src/data/*`), enlazado desde el footer. Red de seguridad para que ninguna URL futura quede huérfana. | nueva página + `Footer.astro` | Garantiza profundidad ≤2 | Nulo |

Los pasos 2–4 por sí solos eliminan las 12 huérfanas. Son la primera PR.

### 5.3 Decisiones con riesgo (no ejecutar sin validar en GSC)

| Decisión | Opciones | Recomendación |
|---|---|---|
| `/accidente-laboral/` frente a `/servicios/accidente-trabajo/` (canibalización) | (a) Mantener las dos y diferenciar la intención; (b) fusionar con un 301 de la que menos tráfico tiene a la otra, actualizando los enlaces internos y el sitemap. | Mirar en GSC qué URL recibe impresiones para «perito accidente laboral/trabajo barcelona». Si una domina, 301 de la otra (en `vercel.json` → `redirects`). **No borrar sin redirección.** |
| `/servicios/perito-seguridad-social/` frente a `/servicios/incapacidad-laboral/` | Igual que la anterior. | Enlazar primero desde incapacidad-laboral (paso 7); fusionar solo si GSC confirma solapamiento. |
| Mover fichas locales a `/zonas/<x>/` o servicios a otro prefijo | — | **No.** Las URLs actuales ya tienen canónica correcta; la jerarquía se consigue con hubs y migas, sin cambiar rutas. |

### 5.4 Fuera del código (infraestructura)

1. **Certificado SSL del dominio sin www**: añadir `peritomedicobarcelona.com` como dominio en Vercel para que emita el certificado y redirija con 308 a `www`.
2. **DNS**: quitar el registro A `31.214.178.55` del dominio sin www (deja solo `76.76.21.21` de Vercel). Hoy `http://` sin www responde con un 302 temporal.
3. Autenticar el MCP de Search Console y revisar «Páginas → Descubierta, no indexada / Rastreada, no indexada» para las 12 huérfanas antes y después de la PR.

### 5.5 Verificación tras cada PR

Repetir el rastreo BFS sobre el build (`npx astro build --outDir /tmp/x` + script de rastreo) y comprobar: 0 huérfanas, profundidad máxima ≤2, 0 enlaces rotos y `/gracias/` fuera del sitemap y con `noindex`.

---

## 6. Estado de aplicación (rama `feat/seo-geo`)

| Paso §5.2 | Estado | Dónde |
|---|---|---|
| 1. Datos centralizados | Hecho | `src/data/servicios.ts` (servicios + landing asociada, abogados, especialidades), `src/data/zonas.ts`, `src/data/posts.ts`, `src/data/site.ts` (NAP y teléfono) |
| 2. Par servicio ↔ landing | Hecho | Caja «¿Prefiere una respuesta rápida?» en `ServiceLayout` (lookup en `servicios.ts`); las landings enlazan su servicio desde la miga y su bloque propio |
| 3. Hub de zonas completo | Hecho | `/perito-medico-area-metropolitana/`, footer y rejilla «Otras zonas» en `LocalLayout` leen `zonas.ts` (14 fichas) |
| 4. `/gracias/` noindex y fuera del sitemap | Hecho | prop `noindex` en `Layout`, filtro en `astro.config.mjs` |
| 5. Home con rejillas | Hecho | servicios desde datos + rejilla de zonas + CTA a `/perito-medico-consulta-gratuita/` |
| 6. Hubs `/servicios/` y `/para-abogados/` | Hecho | páginas nuevas (eran 404); la miga y el footer apuntan a ellos |
| 7. Menú | Hecho | Especialidades con las 3 páginas reales; «Zonas»; accidente de trabajo y Seguridad Social en Servicios |
| 8. `Breadcrumb.astro` + `BreadcrumbList` | Hecho | 3 layouts, 9 landings, hubs y páginas sueltas |
| 9. Relacionados del blog desde datos | Hecho | `BlogPostLayout` (servicio, landing, guías hermanas); `ServiceLayout` lista sus guías |
| 10. `/mapa-web/` | No aplicado | El check de enlazado en el build ya cumple esa función de red de seguridad |

Verificación: `npm run build` ejecuta `scripts/check-enlazado.mjs` (BFS desde `/`: falla si hay huérfanas, enlaces rotos, profundidad > 3 o páginas a 2+ clics con menos de 3 enlaces entrantes). Resultado tras el bloque: **64/64 alcanzables, profundidad máxima 2, 0 rotos**.

### Pendiente (no aplicado a propósito)

- **Dominio sin www y DNS (§5.4)**: certificado de `peritomedicobarcelona.com`, quitar el registro A `31.214.178.55` y cambiar el 302 por 308. Cambia respuestas HTTP: se hace en Vercel y en el DNS, no en el código.
- **Fusiones por canibalización (§5.3)**: `/accidente-laboral/` frente a `/servicios/accidente-trabajo/` y `/servicios/perito-seguridad-social/` frente a `/servicios/incapacidad-laboral/`. Siguen pendientes de datos de Search Console; no se ha cambiado ni redirigido ninguna URL.
