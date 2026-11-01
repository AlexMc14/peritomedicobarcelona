# Oportunidades de palabras clave: noviembre de 2026

Fecha: 2026-11-01 · Rama `feat/keywords-oportunidades` (sobre `master` c63ecac).
Cruza lo publicado (`src/pages`, `src/data/posts.ts`), `docs/auditoria-seo-geo.md`, `docs/guia-redaccion-seo-geo.md` y el plan `perito-informes/barcelona-plan-contenidos.md`.

## 0. Fuentes y limitaciones

| Fuente | Estado |
|---|---|
| Google Search Console (MCP) | **Sin autenticar** («Usa primero get_auth_url»). No hay consultas con impresiones ni posiciones 5-30. Cuando se autentique, repetir el §4 con datos reales. |
| Semrush / Ubersuggest | Sin autenticar. **No hay volúmenes ni KD**: la demanda es cualitativa. |
| Autocompletado de Google (`suggestqueries`, `hl=es`, `gl=es`), 32 semillas, 2026-11-01 | OK. Es la señal principal de demanda. |
| Búsquedas web (SERP) | OK. Para ver quién rankea y qué formato gana. |
| BOE (textos consolidados), Tràmits Gencat | OK. Todos los datos legales de las páginas nuevas se han leído en el artículo citado. |

## 1. Qué está hecho del plan y qué no

| Plan | Estado antes de esta rama |
|---|---|
| #1 Tribunal médico ICAM · #2 La mutua me da el alta · #3 IP denegada | Publicadas (`feat/seo-geo`) |
| #4 Oferta motivada · #5 Latigazo cervical · #6 Grado de discapacidad Barcelona | Pendientes (P1) |
| #7-#18 (P2) y #20-#23 (P3) | Pendientes |
| M1 «perito médico judicial» en el servicio de informes | Pendiente |
| M2, M6, M7 (títulos de incapacidad, alta y discapacidad) | Hechas en la auditoría (T2) |
| M3, M4 (canibalización Seguridad Social e incapacidad, accidente laboral y de trabajo) | Pendientes de GSC: no se tocan |

## 2. Lo que dice el autocompletado (2026-11-01)

- **Cabecera**: `perito medico barcelona` → `…judicial barcelona`, `perito médico incapacidad barcelona` y un competidor con nombre propio. `perito medico` → `…forense`, `…que hace`, `…negligencia medica`, `…incapacidad permanente`.
- **Tráfico**: `oferta motivada` tiene 10 variantes (`…insuficiente`, `…latigazo cervical`, `…pago a cuenta`, `…art 7`, `…masc`, `…aseguradora`). `latigazo cervical indemnizacion` también tiene 10 (`…con baja`, `…grado 2`, `…por choque`). `baremo trafico 2026` también tiene 10.
- **Discapacidad**: `grado de discapacidad barcelona` tiene 8 variantes (revisión, valoración, solicitar, dónde) y `cad barcelona` 10 (Paral·lel, Badal, infantil).
- **Laboral**: `mutua no me da la baja` tiene 10 variantes (por lumbalgia, tendinitis, accidente laboral, cervicalgia…), `accidente in itinere` 10 (requisitos, indemnización, autónomos, cuánto se cobra) y `recargo de prestaciones` 10 (30 %, falta de medidas, INSS, IT).
- **Incapacidad**: `incapacidad permanente por ansiedad` tiene 10 variantes (cuánto se cobra, y depresión, total, absoluta).
- **Forense**: `medico forense o perito` → `…y perito es lo mismo`; `medico forense barcelona`, `instituto medico forense barcelona`; `informe pericial medico` → `…forense`, `…independiente`, `…quien lo hace`.
- Sin sugerencias: `perito medico seguros`, `perito medico psiquiatra barcelona`, `seguro invalidez no paga`. `perito traumatologo barcelona` y `segunda opinion medica barcelona` solo se devuelven a sí mismas (demanda mínima).

## 3. Quién rankea (SERP, 2026-11-01)

- **«perito médico Barcelona»**: directorios (TopDoctors ×2, Páginas Amarillas, masquemedicos), un abogado-perito en asesor.legal, ofertas de empleo y PDFs académicos. **Casi no hay webs de peritos independientes con contenido**: el hueco que señalaba el plan sigue abierto.
- **Guías de problema** (oferta motivada, latigazo, in itinere, recargo, ansiedad): despachos y portales nacionales (Legálitas, Reclamador, elderecho.com, cuestioneslaborales.es, mutuafacil.es, tododisca.com, campmanyabogados.com). Ninguno lo escribe desde la visión del médico (qué tiene que probar el informe), y pocos citan el artículo del BOE con enlace.
- **Local** (grado de discapacidad, CAD): Papelea, tododisca y una página de la UB con direcciones copiadas; los datos de las sedes se contradicen entre fuentes.
- **Forense frente a perito**: diccionario de la CUN y artículos académicos latinoamericanos. No hay ninguna página española orientada al usuario que explique perito de parte, perito judicial y forense con la LEC y la LOPJ.

## 4. Oportunidades elegidas

Criterio: intención comercial (el usuario necesita un informe médico) frente a dificultad (si la SERP es de portales genéricos sin visión médica ni fuente, se puede ganar), sin canibalizar.

| # | Keyword principal (secundarias) | Intención | Quién rankea | Por qué podemos ganar | URL | Hub |
|---|---|---|---|---|---|---|
| 1 | **oferta motivada insuficiente** (oferta motivada latigazo, art 7, pago a cuenta, masc, aseguradora) | Informativa con conversión alta: ya tiene una cifra y duda | elderecho.com, Reclamador, despachos | La reforma de la Ley 5/2025 (art. 7, 14 y 37 LRCSCVM) apenas está explicada; la pregunta clave («¿qué tiene que traer el informe?») es médica | `/blog/oferta-motivada-insuficiente/` | `/accidentes-de-trafico/` |
| 2 | **latigazo cervical indemnización** (con baja, secuelas, informe médico, 72 horas) | Informativa y comercial | Legálitas, motor16, sepin | Los criterios de causalidad del art. 135 y el «informe médico concluyente» son justo el trabajo del perito | `/blog/latigazo-cervical-indemnizacion/` | `/accidentes-de-trafico/` |
| 3 | **grado de discapacidad Barcelona** (revisión, solicitar, dónde, CAD Barcelona, reclamación) | Local, informativa y navegacional | Papelea, tododisca, UB | Demanda local clara (8+10 variantes) y SERP sin fuente oficial; aportamos los plazos de Tràmits Gencat y el RD 888/2022 | `/blog/grado-discapacidad-barcelona-cad/` | `/servicios/discapacidad/` |
| 4 | **médico forense y perito, ¿es lo mismo?** (perito médico judicial, perito de parte, informe pericial médico forense, instituto médico forense Barcelona) | Informativa con salida comercial | Diccionario CUN, PDFs académicos | No hay ninguna respuesta española clara con la LEC (arts. 335, 336, 339, 347) y la LOPJ (art. 479). También captura «perito médico judicial» | `/blog/medico-forense-o-perito-medico/` | `/servicios/informes-periciales-medicos/` |
| 5 | **la mutua no me da la baja** (por accidente laboral, lumbalgia, tendinitis, cervicalgia) | Urgente, alta conversión | CSIF, tododisca, mutuafacil, foros | 10 variantes y SERP de foros y sindicatos sin el procedimiento del RD 1430/2009 art. 6. **No está cubierta**: la guía publicada trata el alta, no la negativa a dar la baja | `/blog/mutua-no-me-da-la-baja/` | `/servicios/determinacion-contingencia/` |
| 6 | **accidente in itinere** (requisitos, indemnización, autónomos, es accidente laboral) | Informativa | mutuafacil, Legálitas, payfit | La doble vía (mutua y aseguradora de tráfico) es un argumento pericial; citamos LGSS 156 y 316 | `/blog/accidente-in-itinere/` | `/accidente-laboral/` |
| 7 | **recargo de prestaciones** (por accidente de trabajo, del 30 %, falta de medidas, INSS) | Informativa | cuestioneslaborales, economistjurist | Nadie explica qué parte es médica (nexo y secuelas) frente a la infracción; LGSS 164 y RD 1300/1995 | `/blog/recargo-de-prestaciones-accidente-trabajo/` | `/accidente-laboral/` |
| 8 | **incapacidad permanente por ansiedad** (y depresión, total, absoluta) | Informativa con intención de contratar | mutuafacil, campmany, tododisca | Lo decisivo es médico: objetivar la limitación funcional (LGSS 193 y 194). Tenemos la especialidad de psiquiatría para enlazarla | `/blog/incapacidad-permanente-ansiedad-depresion/` | `/servicios/incapacidad-laboral/` |

**Refuerzo en vez de página nueva**
- **perito médico judicial Barcelona** (2.ª sugerencia de la cabecera, M1 del plan): lo cubre `/servicios/informes-periciales-medicos/`. Se cambia su `<title>` a «Perito Médico Judicial en Barcelona: Informes Periciales Médicos» y la guía #4 lo enlaza con ese ancla. No se crea otra URL.
- `/especialidades/psiquiatria/` sigue atacando «perito médico psiquiatra» (transaccional); la guía #8 la enlaza.

**Descartadas o aplazadas**
- `baremo trafico 2026` (#11 del plan): la demanda es alta, pero las cuantías exigen la resolución anual de la DGSFP y mantenimiento cada año. La SERP es de portales nacionales muy fuertes. Se aplaza.
- Landings por municipio (`perito medico girona/tarragona`): condicionadas a una decisión de negocio (§23 del plan).
- `segunda opinion medica barcelona`, `perito traumatologo barcelona`: demanda mínima; ya hay servicio y especialidad.
- `reclamacion patrimonial catsalut` (#7): una sola sugerencia. Siguiente tanda.
- `seguro invalidez no paga` (#16): sin autocompletado.

## 5. Reglas aplicadas en las páginas nuevas

Guía de redacción del repo: respuesta directa de 40-60 palabras al inicio, H2 en forma de pregunta, una tabla por guía, FAQ (el `FAQPage` lo genera `BlogPostLayout`) y fuentes oficiales con enlace (BOE consolidado con artículo, Tràmits Gencat). Sin «gratis», «gratuito» ni «sin coste», sin precios, sin plazos propios, sin datos del perito, sin casos reales y sin correo. No se dan direcciones de organismos (las fuentes se contradicen): se enlaza la web oficial con un aviso de independencia.

Enlazado: alta en `src/data/posts.ts` con su hub. Con eso salen en `/blog/`, `/servicios/`, la caja «Guías paso a paso» del hub, los relacionados de sus guías hermanas y `/llms.txt`. Además, cada guía enlaza en el cuerpo su servicio, su landing de consulta y 1-2 guías relacionadas.

## 6. Pendiente

1. Autenticar GSC y repetir el análisis con posiciones 5-30. Vigilar durante 8-12 semanas la canibalización entre cada guía y su hub.
2. Revisión médica y jurídica (YMYL) antes de mergear, sobre todo de la oferta motivada (redacción de la Ley 5/2025 y su régimen transitorio, disposición final 9.ª) y del encaje del MASC con la reclamación de tráfico.
3. Siguiente tanda: #7 CatSalut, #11 baremo 2026 (con la resolución de la DGSFP), #15 patinete y bici en Barcelona, #17 caída en la vía pública.
