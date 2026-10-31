# Guía de redacción SEO + GEO — peritomedicobarcelona.com

Reglas para redactar el resto de `perito-informes/barcelona-plan-contenidos.md` (fichas 4-23 y mejoras M1-M13). Las tres guías publicadas en `feat/seo-geo` sirven de modelo:
`src/pages/blog/tribunal-medico-icam-barcelona.astro`, `mutua-me-da-el-alta-sin-estar-bien.astro` e `incapacidad-permanente-denegada-que-hacer.astro`.

## 1. Límites (contenido sanitario y legal, YMYL)

1. **No se inventa nada**: credenciales, números de colegiado, nombres, casos, testimonios, reseñas, estadísticas, importes, porcentajes de éxito ni plazos de juzgados. Solo vale lo que ya está en el repo o lo que dice una fuente oficial enlazable.
2. **Cada plazo, porcentaje o requisito legal lleva su fuente** con enlace: BOE (texto consolidado, con artículo), Seguridad Social/INSS, Canal Salut o `gencat.cat`, Departament de Justícia. Blogs de despachos y foros sirven para encontrar el dato, no para citarlo.
3. Si un dato no se puede verificar, **se deja fuera** y se anota en la PR. No se rellena «de memoria».
4. **No se suplanta a ningún organismo**: se nombra (ICAM/SGAM, INSS, CAD, juzgados, mutuas), se enlaza su web oficial para teléfonos, horarios y citas, y se añade el aviso de que la web es un servicio privado e independiente.
5. **No usar «gratis», «gratuito/a», «gratuitamente» ni «sin coste»** en ningún texto nuevo o reescrito: títulos, metas, H1-H3, cuerpo, FAQ, CTAs, JSON-LD, `llms.txt` ni mensajes de WhatsApp. Usar «consulta telefónica», «primera valoración por teléfono» o «revisión de su caso». Las URLs existentes `*-gratuita/` no se cambian (están indexadas); solo se enlazan.
6. Nada de promesas de resultado ni de plazo propio («en 24 h», «ganamos el 90 %»).
7. **Ningún caso real**: ni casos de éxito, ni casos de clientes, ni ejemplos presentados como reales, ni testimonios, ni nombres de clientes o empresas. Si hace falta un ejemplo, que sea genérico y claramente hipotético («por ejemplo, una persona que…»), sin datos que parezcan reales.
8. **Ninguna identidad personal del perito**: ni nombre, ni número de colegiado, ni colegio. La autoría es siempre del equipo: «Revisado por el equipo médico de Perito Médico Barcelona» con fecha de revisión, y en JSON-LD el autor es la organización.
9. Tono de la web: usted, frases cortas, sin alarmismo, sin superlativos vacíos.

## 2. Estructura de cada guía

| Elemento | Regla |
|---|---|
| URL | `/blog/<slug>/` (ver el plan). Sin año en el slug salvo que el contenido caduque con el año. |
| `pageTitle` | ≤ 65 caracteres, keyword principal al principio, sin repetir la marca si no cabe. |
| `description` | 120-160 caracteres, con el dato clave (plazo, órgano) y la promesa de la página. |
| H1 (`title`) | Pregunta o problema tal como lo busca la gente («La mutua me da el alta pero no estoy bien…»). |
| **Primer párrafo** | **Respuesta directa y citable de 40-60 palabras**: qué hacer, ante quién y en qué plazo, con la norma. Debe entenderse sin leer el resto. |
| Aviso de independencia | Si la guía trata un organismo concreto. |
| H2 | Preguntas reales (del autocompletado o de la ficha del plan), cada una con su respuesta en el primer párrafo bajo el H2. |
| Tabla o lista | Al menos una: plazos, pasos, «quién / qué / plazo / norma». Las IA y los fragmentos destacados citan tablas. |
| Entidades locales | ICAM/SGAM, Ciutat de la Justícia (edifici S), Jutjats Socials, CAD, hospitales, mutuas… solo con datos verificados en fuente oficial. |
| «Cómo le ayudamos» | Enlace al servicio hub con ancla descriptiva + enlace a su landing de consulta (`*-gratuita/`) con un texto que no diga «gratuita». |
| Fuentes | Lista final con enlaces a las normas y páginas oficiales usadas (BOE, Seguridad Social/INSS, Canal Salut, CGPJ, Departament de Justícia). En servicios, las claves de `src/data/fuentes.ts` en el campo `fuentes` de `servicios.ts`. |
| FAQ (`faqs`) | 3-5 preguntas que no repitan los H2; respuestas de 1-3 frases que se sostengan solas. El layout genera el `FAQPage`. |

## 3. Enlazado: que no nazca huérfana

1. Dar de alta la guía en `src/data/posts.ts` con su `servicio` (el hub según el plan). Con eso aparece sola en `/blog/`, en `/servicios/`, en la caja «Guías paso a paso» de su servicio, en «Relacionado» de sus guías hermanas y en `/llms.txt`.
2. En el cuerpo, enlazar: el servicio hub, su landing de consulta, 1-2 guías hermanas y la página local o judicial si el dato local es relevante.
3. Una ficha local nueva se da de alta en `src/data/zonas.ts`; un servicio nuevo, en `src/data/servicios.ts` (con su `landing` si existe).
4. `npm run build` ejecuta `scripts/check-enlazado.mjs`: falla si la página es huérfana, tiene enlaces rotos, está a más de 3 clics o tiene menos de 3 enlaces entrantes.

## 4. Datos estructurados y fechas

- `BlogPostLayout` emite `Article` (`author`, `publisher`, `datePublished`, `dateModified`), `BreadcrumbList` y `FAQPage`. Pasar `date` (publicación) y, al revisar, `updated` (se muestra como «Última revisión»).
- Servicios: `ServiceLayout` acepta `respuesta` (respuesta directa en el hero) y `actualizado` (fecha de revisión; por defecto `REVISION_SERVICIOS` de `site.ts`). Las fuentes salen de `servicios.ts`. La línea «Revisado por el equipo médico», la fecha, el aviso de que no sustituye una valoración individual y `dateModified` los pone el layout.
- La autoría va siempre a nombre del equipo (`AUTORIA` en `src/data/site.ts`) y el autor en JSON-LD es la organización. No se nombra a ninguna persona ni se publican datos de colegiación.
- Teléfono, correo y WhatsApp solo desde `src/data/site.ts`; nunca escritos a mano en una página.

## 5. Antes de publicar (checklist)

- [ ] Cada dato legal o sanitario tiene su enlace oficial y se ha leído el artículo citado.
- [ ] Primer párrafo de 40-60 palabras que responde la pregunta del H1.
- [ ] Sin «gratis», «gratuito/a», «gratuitamente» ni «sin coste».
- [ ] Sin cifras, casos reales, testimonios, nombres de clientes o empresas, ni datos del perito.
- [ ] Alta en `posts.ts` / `zonas.ts` / `servicios.ts`.
- [ ] `npm run build` en verde (incluye el check de enlazado).
- [ ] JSON-LD sin errores en `validator.schema.org`.
- [ ] Revisión médica y jurídica del contenido antes de mergear (YMYL).
- [ ] Comparar con la página vecina más parecida (fichas locales: < 30 % de frases compartidas; ver §5.2 del plan).
