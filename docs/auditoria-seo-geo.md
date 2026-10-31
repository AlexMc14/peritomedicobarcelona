# Auditoría SEO + GEO — peritomedicobarcelona.com

Fecha: 2026-10-31 · Rama: `feat/seo-geo` (sobre `master` dc8875b) · Método: build de Astro, script de auditoría sobre `dist/` (títulos, metas, H1, JSON-LD, imágenes), validador de schema.org (`validator.schema.org`), Lighthouse 12.2.1 en móvil y revisión manual del código. Search Console, Semrush y Ubersuggest siguen sin autenticar, así que no hay datos de impresiones ni de posiciones.

**Prioridad**: Alta = afecta a la confianza (YMYL) o a la elegibilidad en buscadores/IA; Media = mejora clara con coste bajo; Baja = pulido.
**Estado**: ✅ hecho en esta PR · ⏳ pendiente (con el motivo).

---

## 1. E-E-A-T (contenido sanitario y legal, YMYL)

| # | Hallazgo | Evidencia | Prio | Estado |
|---|---|---|---|---|
| E1 | **Sin firma ni política editorial.** Ninguna página decía quién redacta y revisa los contenidos ni cómo. | `/sobre-nosotros/` habla de «un equipo» sin sección de autoría; las guías no tenían firma. | Alta | ✅ Autoría siempre a nombre de la marca (sin identidad personal): «Revisado por el equipo médico de Perito Médico Barcelona» con fecha, en las 22 páginas de servicio, las 8 guías y las páginas de confianza. Páginas nuevas **`/politica-editorial/`** (quién redacta, cómo se revisa, fuentes, frecuencia de revisión, cómo comunicar un error) y **`/metodologia/`** («Cómo trabajamos»: proceso pericial, normativa con enlace al BOE, independencia, presupuesto y confidencialidad), enlazadas desde el footer, `/sobre-nosotros/#autoria` y cada guía. |
| E2 | Sin fecha de revisión visible ni `dateModified`. Las guías mostraban la fecha ISO en crudo (`2026-05-01`). | `BlogPostLayout.astro`: `<time>{date}</time>`; Article sin `author` ni `dateModified`. | Alta | ✅ `Revision.astro`: «Revisado por el equipo médico… el [fecha]» + aviso «Información general: no sustituye la valoración individual de su caso». `dateModified` en `Article` y en el `WebPage` de servicios, guías y páginas legales. |
| E3 | Sin fuentes citadas: ninguna página enlazaba al BOE, al INSS ni a gencat. | `grep -rln "boe.es\|gencat" src` → 0. | Alta | ✅ Sección «Fuentes y normativa» en **todas** las páginas de servicio, desde un registro único (`src/data/fuentes.ts`, 16 fuentes comprobadas: BOE, Seguridad Social, Canal Salut, Tràmits Gencat, CGPJ). Las guías nuevas citan BOE, Canal Salut y Departament de Justícia. |
| E4 | **Aviso legal y privacidad con huecos** (`[Nombre o razón social del titular]`, `[NIF/CIF]`, `[Dirección…]`); cookies genérica con «[fecha]». | `aviso-legal.astro`, `politica-privacidad.astro`, `cookies.astro` (antes). | Alta | ✅ Textos legales del titular (Lukeraibra SL) adaptados a esta web: datos identificativos, privacidad con datos de salud (art. 9 RGPD), encargados reales (Vercel, Web3Forms) y AEPD; cookies ajustada a lo que la web usa de verdad (ninguna cookie; Google Fonts y Web3Forms sin cookies). Enlazadas desde el footer y desde el consentimiento de los dos formularios, que ahora incluyen la información básica de protección de datos. |
| E5 | Enlaces legales del footer con contraste 3,02:1 (`text-gray-500` sobre `#102a43`). | Lighthouse «color-contrast». | Media | ✅ `text-gray-400` (≈6,3:1). |
| E6 | **Cifras sin respaldo**: «+500 informes», «+200 ratificaciones», «+15 años» (home y `/sobre-nosotros/`). | `src/pages/index.astro`, `sobre-nosotros.astro`. | Alta | ⏳ No se han tocado ni copiado al JSON-LD ni a `llms.txt`. El titular debe confirmarlas o retirarlas: en YMYL una cifra no verificable resta confianza. |
| E7 | **Plazos de prescripción contradictorios** en negligencia médica: el servicio dice «plazo general de un año; en el ámbito penal puede llegar hasta cinco años» y la landing gratuita, «vía civil 5 años, vía penal también 5 años, sanidad pública 1 año». | `servicios/negligencia-medica.astro` (FAQ 2) frente a `negligencia-medica-consulta-gratuita.astro` (FAQ 2). | Alta | ⏳ Necesita revisión jurídica (depende de si la responsabilidad es contractual, extracontractual o patrimonial, y del delito). No se ha reescrito para no introducir otro error. |
| E8 | Promesa de plazo «Valoración en 24-48h» en el hero y en la FAQ de la home, cuando el commit 87cb31c retiró promesas de 24 h. | `HeroSection.astro`, `index.astro` (FAQ 2). | Media | ⏳ Confirmar con el titular si se mantiene. |
| E9 | Horario L-V 9-19 h en el JSON-LD, pero no aparece en ninguna página visible. | JSON-LD de `Layout.astro`. | Media | ⏳ Se ha mantenido (dato del repo). Confirmar y mostrarlo en `/contacto/`, o quitarlo del JSON-LD. |
| E10 | **El formulario de `/contacto/` redirigía a una web antigua** tras enviar: `redirect` = `https://alexmc14.github.io/peritomedicobarcelona/gracias` y asunto «…peritomedicobarcelona.es». | `src/pages/contacto.astro`. | Alta | ✅ Redirige a `/gracias/` de este dominio; asunto con `.com`. Contacto completado con teléfono, WhatsApp, correo, cómo se presupuesta y cómo se tratan los datos médicos. |
| E11 | Afirmación sin respaldo en el repo: «estamos inscritos en las listas de peritos judiciales». | `preguntas-frecuentes.astro` (FAQ «¿Pueden actuar como peritos judiciales…?»). | Alta | ⏳ Confirmar con el titular o retirarla. No se ha tocado. |
| E12 | «Gratis», «gratuito/a» y «sin coste» en textos existentes (CTA del header, footer, `CTASection`, barras laterales, landings) y en 9 URLs `*-gratuita/`. | `grep -rn "gratuit" src/components src/layouts`. | Media | ✅ Ningún texto nuevo o reescrito de esta PR lo usa. ⏳ Textos existentes: decisión del titular. Las URLs no se cambian (están indexadas); si se renombran, con 301. |
| E13 | Casos reales, testimonios o nombres de clientes. | Revisión de los textos tocados. | Alta | ✅ No hay ninguno en la web. Retirado del plan de contenidos el artículo #19 (amianto), que se apoyaba en casos reales. Regla añadida a la guía de redacción. |

## 2. Datos estructurados (JSON-LD) y NAP

| # | Hallazgo | Evidencia | Prio | Estado |
|---|---|---|---|---|
| D1 | **Organización duplicada y contradictoria**: 78 bloques `MedicalBusiness` en 64 páginas (global + `LocalLayout` + `/sobre-nosotros/`). En `/sobre-nosotros/` la URL era `https://peritomedicobarcelona.es` (otro dominio). | Script de auditoría: `MedicalBusiness: 78`. | Alta | ✅ Un solo grafo global (`@graph`): `ProfessionalService` con `@id` estable, `WebSite` y `WebPage`. El resto de bloques referencian la organización por `@id`. |
| D2 | **NAP inventado en el JSON-LD**: `streetAddress: "Barcelona"`, `postalCode: "08001"` y coordenadas del centro de la ciudad. No corresponden a ningún despacho del repo. | `Layout.astro` (antes). | Alta | ✅ Retirados; queda `addressLocality/Region/Country`. La dirección del titular (Getafe) no se usa como dirección del negocio local para no romper el NAP de Barcelona. |
| D3 | Teléfono y correo: **un solo número en toda la web** (+34 692 36 61 04) y un solo correo. | `grep` de teléfonos en `src/`. | — | ✅ Ahora salen de `src/data/site.ts` (JSON-LD, botones, privacidad). |
| D4 | Servicios con FAQ visible pero **sin `FAQPage`**: los 22 de `ServiceLayout` y otras páginas. | 24 páginas con `<details>` y sin `FAQPage`. | Alta | ✅ `FAQPage` en `ServiceLayout` (22 páginas). Nueva categoría «Sobre nuestro servicio» en `/preguntas-frecuentes/` (independencia, validez en juicio, ratificación, presupuesto, datos médicos). |
| D5 | Sin `Service` por servicio. | — | Media | ✅ `Service` con `provider` → organización y `areaServed`. |
| D6 | Sin `BreadcrumbList`. | 0 en el build original. | Media | ✅ `Breadcrumb.astro` (bloque 0): 61 páginas. |
| D7 | `Article` sin autor ni `dateModified`; `publisher.url` sin `www`. | `BlogPostLayout.astro` (antes). | Alta | ✅ |
| D8 | Entidad de marca: autor, `legalName`, `knowsAbout`, `sameAs`. | — | Alta | ✅ `ProfessionalService` con `@id` único reutilizado como `author` y `publisher` en los 8 `Article` y como `provider` en los `Service`; `legalName` Lukeraibra SL; `knowsAbout` con las especialidades de `servicios.ts`. `sameAs` vacío a propósito: el repo no tiene ningún perfil real (Google Business, redes). |
| D9 | `areaServed` solo «Barcelona» y «Cataluña». | — | Media | ✅ Barcelona + las 14 zonas de `zonas.ts` + Cataluña. |
| D10 | Validación | `validator.schema.org` (home, servicio, ficha local, guía, landing) a mitad de PR; build final comprobado con script. | — | ✅ Validador: **0 errores, 0 avisos**. Build final: 70 páginas, 222 bloques JSON-LD, 0 errores de sintaxis, 0 referencias `@id` sin nodo, 56 `FAQPage` (ninguna página con dos). El validador web quedó limitado (HTTP 429) al final; repetir con la prueba de resultados enriquecidos tras el despliegue. |

## 3. GEO (motores generativos)

| # | Hallazgo | Evidencia | Prio | Estado |
|---|---|---|---|---|
| G1 | Las páginas clave abren con texto emocional, no con una respuesta citable (p. ej. incapacidad laboral: «Sabemos lo difícil que es…»). | Intro de `ServiceLayout` en cada servicio. | Alta | ✅ Prop `respuesta` (40-60 palabras, con el dato concreto: plazos, grados, baremo) que sustituye a la intro en el hero y la manda al cuerpo. Aplicado en la home y 7 páginas: informes periciales, negligencia, daño corporal, incapacidad laboral, impugnación de alta, tráfico y accidente laboral. ⏳ Resto: con la guía de redacción. |
| G2 | Preguntas reales: las FAQ existen, pero en `<summary>`, no como H2/H3. | Todas las FAQ. | Baja | ✅ En las guías nuevas las preguntas son H2/H3. ⏳ En las páginas existentes se mantiene el acordeón (cambiarlo es un rediseño). El marcado `FAQPage` ya expone las preguntas. |
| G3 | Datos concretos con fuente. | — | Alta | ✅ Plazos verificados contra el BOE (RD 1430/2009 arts. 3 y 4; LRJS arts. 21, 71 y 140) y Canal Salut, con enlace. Ver E3. |
| G4 | Entidades locales: las fichas citan hospitales y juzgados, pero ninguna página trabaja ICAM/SGAM, Ciutat de la Justícia (edifici S) ni las mutuas. | `barcelona-plan-contenidos.md` §5.1. | Media | ✅ Guías nuevas: ICAM/SGAM, Ciutat de la Justícia, Jutjats Socials, INSS, mutuas, Canal Salut. |
| G5 | **Sin `llms.txt`.** | 404. | Media | ✅ `/llms.txt` generado en el build desde los registros de datos (`src/pages/llms.txt.ts`), así que incluye solas las páginas nuevas. Se genera en vez de dejar un fichero fijo en `public/` para que no se desactualice. |
| G6 | `robots.txt` sin política para rastreadores de IA. | `User-agent: * / Allow: /`. | Media | ✅ Permitidos explícitamente GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended y Applebot-Extended. No hay motivo para bloquearlos: el contenido es público y de captación. |
| G7 | Tablas y listas: las guías existentes usan listas; casi no hay tablas. | — | Baja | ✅ Las 3 guías nuevas incluyen una tabla de plazos o pasos. |

## 4. SEO técnico

| # | Hallazgo | Evidencia | Prio | Estado |
|---|---|---|---|---|
| T1 | Títulos y descripciones **únicos** (0 duplicados) y **un H1 por página** en las 70. | Script de auditoría. | — | ✅ OK, también con las páginas nuevas. |
| T2 | 10 títulos de más de 75 caracteres (hasta 100), que Google corta. | `servicios/determinacion-contingencia` (100), `impugnacion-alta-medica` (91), `incapacidad-laboral` (89)… | Media | ✅ Acortados a ≤73. Incapacidad laboral e impugnación siguen el plan (M2, M6): «Perito Médico Incapacidad Permanente Barcelona \| INSS e ICAM». ⏳ Quedan unos 25 títulos de 66-73 caracteres: Baja. |
| T3 | ~45 meta descriptions de más de 160 caracteres. | Script de auditoría. | Baja | ⏳ Google las reescribe con frecuencia; reescribirlas a mano en lote tiene poco retorno. Hacerlo cuando se toque cada página. |
| T4 | Canónicas autorreferenciadas con `www` y barra final. | 64/64. | — | ✅ OK. |
| T5 | `/gracias/` indexable y en el sitemap. | `sitemap-0.xml`. | Media | ✅ `noindex, follow` y fuera del sitemap (bloque 0). |
| T6 | Sitemap sin `lastmod`. | `sitemap-0.xml`. | Baja | ⏳ Añadirlo exige fechas fiables por página; hoy no las hay. |
| T7 | Imágenes: el sitio no usa `<img>` (solo SVG en línea), así que no hay problemas de `alt`, peso ni formato. **No hay `og:image`.** | Script de auditoría: 0 `<img>`. | Media | ⏳ Hace falta una imagen de marca (1200×630) y, para E-E-A-T, una foto real del equipo o del despacho. No se ha generado ninguna. |
| T8 | hreflang | La web solo está en español. | — | No aplica. |
| T9 | Contraste del CTA dorado: blanco sobre `accent-500` (#b8860b) = 3,25:1, por debajo de 4,5:1. También `text-accent-600` en las etiquetas de sección (4,1-4,5:1). | Lighthouse «color-contrast». | Media | ⏳ Es el color de marca de todos los CTA: decisión de diseño (oscurecer a `accent-700` o texto oscuro). |
| T10 | Menú de escritorio: al añadir «Zonas» se partía en dos líneas a 1280 px y desbordaba a 1024 px. | Revisión visual. | Media | ✅ Menú de escritorio a partir de `xl` (1280 px) y hamburguesa por debajo. |
| T11 | Rendimiento (Lighthouse 12.2.1, móvil, build servido en local sin compresión) | Ver tabla. | — | ✅ Sin regresiones. ⏳ La fuente de Google Fonts bloquea el render (LCP ≈ 2,6-2,9 s en local); autoalojarla con `font-display: swap` y precarga es la siguiente mejora. |
| T12 | Dominio sin `www` con certificado inválido y DNS doble (302). | `docs/analisis-reestructuracion-enlazado.md` §5.4. | Alta | ⏳ Infraestructura (Vercel y DNS), fuera del código. |

### Lighthouse (móvil)

Lighthouse 12.2.1, móvil, build servido en local con un servidor estático **sin compresión ni caché** (en Vercel el HTML va comprimido). Mediana de varias pasadas; entre paréntesis, el rango.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Home, antes | 90 (89-99) | 95 | 100 | 100 | 2,9 s | 0,018 |
| Home, después | 98 (88-98) | 95 | 100 | 100 | 1,9 s | 0,001 |
| Landing negligencia, antes (7 pasadas) | 96 (79-96) | 95 | 100 | 100 | 1,7 s | 0,103 |
| Landing negligencia, después (7 pasadas) | 88 (87-96) | 95 | 100 | 100 | 2,9 s | 0,103 |

El LCP es bimodal en las dos versiones (1,7 s o 2,9 s según cuándo llega la fuente de Google Fonts), así que las medianas de la landing no separan una regresión del ruido. El HTML de la landing pasa de 47 a 58 KB sin comprimir (footer con las 14 zonas, menú desde datos, JSON-LD). Accesibilidad, buenas prácticas y SEO sin cambios; el único fallo de accesibilidad que queda es el contraste del dorado de marca (T9). El fallo «label-content-name-mismatch» que introdujo el botón «Escribir» se corrigió. Siguiente mejora: autoalojar las fuentes (T11).

## 5. Acciones fuera de la web (para el titular)

1. **Google Business Profile**: crear o reclamar la ficha «Perito Médico Barcelona» con el mismo nombre, teléfono (+34 692 36 61 04) y web. Si no hay despacho abierto al público, configurarla como empresa de área de servicio (Barcelona y área metropolitana) y ocultar la dirección. Cuando exista, añadir su URL a `sameAs` en `Layout.astro`.
2. **Reseñas reales** en Google, pedidas a clientes reales tras cerrar el caso. No escribir ni comprar reseñas ni testimonios, y no marcar reseñas en el JSON-LD de la propia web.
3. **Mismo NAP en todas partes**: mismo nombre comercial, teléfono, correo y web en Google Business, directorios y redes.
4. **Directorios jurídicos y sanitarios** con el mismo NAP (p. ej. Doctoralia, Top Doctors, directorios de peritos y de servicios para abogados, Páginas Amarillas, QDQ, Cylex).
5. **Menciones en medios locales** (prensa de Barcelona y comarcas, radios locales, blogs de despachos) explicando trámites como el alta de la mutua o el tribunal médico, con enlace a la guía correspondiente.
6. **Despachos colaboradores**: pedir un enlace desde sus webs (páginas de colaboradores o de recursos).
7. **Search Console**: autenticar el MCP, enviar el sitemap y revisar la indexación de las 12 páginas que antes eran huérfanas, de las 3 guías y de las páginas nuevas. Con datos, decidir las fusiones pendientes (accidente laboral/trabajo, seguridad social/incapacidad laboral).
8. **Dominio**: certificado y redirección 308 del dominio sin `www` en Vercel; quitar el registro A ajeno (T12).

## 6. Resumen de estado

- **Hecho en esta PR**: E1-E5, E10, E13, D1-D10, G1 (parcial), G2 (guías nuevas), G3-G7, T2, T5, T10, y E12 en los textos nuevos.
- **Pendiente de confirmar por el titular**: E6 (cifras), E8 (plazo 24-48 h), E9 (horario), E11 (listas de peritos judiciales), E12 (textos existentes con «gratuito»), T7 (imágenes).
- **Pendiente por decisión de negocio, jurídica o de diseño**: E7 (revisión jurídica de plazos), T9 (color de marca), fusiones de URLs (GSC), T12 (infraestructura).
- **Prioridad baja**: T3, T6, resto de títulos de 66-73 caracteres, G1 en el resto de páginas.
