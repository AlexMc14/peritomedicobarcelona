// Registro único de guías y artículos. Alimenta el índice del blog y los relacionados de cada
// post (su servicio hub, la landing de consulta del servicio y las guías hermanas del mismo hub).
export interface Post {
  titulo: string;
  href: string;
  descripcion: string;
  categoria: string;
  /** ISO yyyy-mm-dd */
  fecha: string;
  lectura: string;
  /** href del servicio del que cuelga (debe existir en servicios.ts) */
  servicio: string;
}

export const posts: Post[] = [
  {
    titulo: 'Tipos de informe pericial médico en 2026: guía completa',
    href: '/informes/tipos-informe-pericial-medico-2026/',
    descripcion: 'Qué es cada tipo de informe pericial médico, para qué sirve y cuándo solicitarlo: valoración del daño corporal, negligencia médica, incapacidad permanente, accidente de trabajo, impugnación de alta y contrainforme.',
    categoria: 'Guía 2026',
    fecha: '2026-05-01',
    lectura: '10',
    servicio: '/servicios/informes-periciales-medicos/',
  },
  {
    titulo: 'Coste y plazo de un informe pericial médico: de qué dependen',
    href: '/informes/precios-plazos-informe-pericial-2026/',
    descripcion: 'Qué trabajo exige cada tipo de informe pericial médico y qué factores determinan su coste y su plazo.',
    categoria: 'Guía práctica',
    fecha: '2026-05-01',
    lectura: '9',
    servicio: '/servicios/informes-periciales-medicos/',
  },
  {
    titulo: 'Cómo reclamar una negligencia médica en Barcelona',
    href: '/blog/como-reclamar-negligencia-medica-barcelona/',
    descripcion: 'Guía completa con los tres elementos necesarios para reclamar (lex artis, nexo causal y daño), los plazos de prescripción y las vías disponibles: civil, penal y contencioso-administrativa.',
    categoria: 'Negligencia Médica',
    fecha: '2026-05-10',
    lectura: '11',
    servicio: '/servicios/negligencia-medica/',
  },
  {
    titulo: 'Perito médico en incapacidad permanente: guía completa',
    href: '/blog/perito-medico-incapacidad-permanente/',
    descripcion: 'Todo lo que necesita saber sobre el informe pericial médico en los procesos de incapacidad permanente ante el INSS: grados, proceso de reclamación paso a paso y cuándo actuar.',
    categoria: 'Incapacidad Permanente',
    fecha: '2026-05-05',
    lectura: '10',
    servicio: '/servicios/incapacidad-laboral/',
  },
  {
    titulo: '¿Cuánto cuesta un perito médico en Barcelona? Qué determina el coste',
    href: '/blog/cuanto-cuesta-perito-medico-barcelona/',
    descripcion: 'Qué determina el coste de una pericia médica, cuándo se recuperan los honorarios del perito en costas y qué preguntar antes de encargar un informe.',
    categoria: 'Costes y costas',
    fecha: '2026-05-01',
    lectura: '8',
    servicio: '/servicios/informes-periciales-medicos/',
  },
  {
    titulo: 'Tribunal médico de Barcelona (ICAM): qué es y cómo preparar la cita',
    href: '/blog/tribunal-medico-icam-barcelona/',
    descripcion: 'Qué es el ICAM (hoy SGAM), para qué le citan, qué llevar a la cita y qué hacer si le dan el alta o le deniegan la incapacidad permanente.',
    categoria: 'Incapacidad Laboral',
    fecha: '2026-10-31',
    lectura: '7',
    servicio: '/servicios/incapacidad-laboral/',
  },
  {
    titulo: 'La mutua me da el alta pero no estoy bien: qué hacer y en qué plazo',
    href: '/blog/mutua-me-da-el-alta-sin-estar-bien/',
    descripcion: 'Plazos y pasos para pedir al INSS la revisión del alta de la mutua, y qué cambia si la baja es por enfermedad común o si el alta la da el INSS.',
    categoria: 'Alta Médica',
    fecha: '2026-10-31',
    lectura: '7',
    servicio: '/servicios/impugnacion-alta-medica/',
  },
  {
    titulo: 'Incapacidad permanente denegada: qué hacer en Barcelona',
    href: '/blog/incapacidad-permanente-denegada-que-hacer/',
    descripcion: 'Reclamación previa, demanda y juicio en los Juzgados de lo Social de Barcelona: plazos de la Ley 36/2011 y qué aportar en cada paso.',
    categoria: 'Incapacidad Permanente',
    fecha: '2026-10-31',
    lectura: '7',
    servicio: '/servicios/incapacidad-laboral/',
  },
  {
    titulo: 'Oferta motivada insuficiente: cómo rebatirla tras un accidente de tráfico',
    href: '/blog/oferta-motivada-insuficiente/',
    descripcion: 'Plazos de la oferta y la respuesta motivada, qué revisar del informe de la aseguradora, el informe complementario del Instituto de Medicina Legal y el MASC.',
    categoria: 'Accidentes de Tráfico',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/accidentes-de-trafico/',
  },
  {
    titulo: 'Latigazo cervical: indemnización y cómo acreditarlo ante la aseguradora',
    href: '/blog/latigazo-cervical-indemnizacion/',
    descripcion: 'Los cuatro criterios de causalidad del baremo, la regla de las 72 horas, cómo se calcula la indemnización y qué debe tener el informe médico concluyente.',
    categoria: 'Accidentes de Tráfico',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/accidentes-de-trafico/',
  },
  {
    titulo: 'Grado de discapacidad en Barcelona: cómo solicitarlo, el CAD y cómo reclamar',
    href: '/blog/grado-discapacidad-barcelona-cad/',
    descripcion: 'Solicitud ante la Generalitat, valoración en el CAD, revisión a los dos años y reclamación en 30 días, con el baremo del Real Decreto 888/2022.',
    categoria: 'Discapacidad',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/servicios/discapacidad/',
  },
  {
    titulo: '¿Médico forense o perito médico? Diferencias y cuándo necesita cada uno',
    href: '/blog/medico-forense-o-perito-medico/',
    descripcion: 'Médico forense, perito judicial y perito de parte según la LEC y la LOPJ: quién los designa, quién los paga y cuándo conviene cada uno.',
    categoria: 'Informes Periciales',
    fecha: '2026-11-01',
    lectura: '6',
    servicio: '/servicios/informes-periciales-medicos/',
  },
  {
    titulo: 'La mutua no me da la baja tras un accidente laboral: qué hacer',
    href: '/blog/mutua-no-me-da-la-baja/',
    descripcion: 'Baja del médico de familia, solicitud de determinación de contingencia al INSS y plazos del Real Decreto 1430/2009, con lo que debe probar el informe.',
    categoria: 'Accidente de Trabajo',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/servicios/determinacion-contingencia/',
  },
  {
    titulo: 'Accidente in itinere: requisitos, baja e indemnización',
    href: '/blog/accidente-in-itinere/',
    descripcion: 'Qué es el accidente al ir o volver del trabajo (art. 156 LGSS), el caso de los autónomos y la doble vía con la mutua y con la aseguradora del vehículo.',
    categoria: 'Accidente de Trabajo',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/accidente-laboral/',
  },
  {
    titulo: 'Recargo de prestaciones por accidente de trabajo: qué es y qué papel tiene el perito médico',
    href: '/blog/recargo-de-prestaciones-accidente-trabajo/',
    descripcion: 'El recargo del 30 al 50 % por falta de medidas de seguridad: quién lo paga, quién lo declara y qué aporta el informe médico.',
    categoria: 'Accidente de Trabajo',
    fecha: '2026-11-01',
    lectura: '6',
    servicio: '/accidente-laboral/',
  },
  {
    titulo: 'Incapacidad permanente por ansiedad y depresión: qué se valora y cómo acreditarla',
    href: '/blog/incapacidad-permanente-ansiedad-depresion/',
    descripcion: 'Requisitos del art. 193 LGSS aplicados a la patología psiquiátrica, grados posibles, por qué se deniegan y qué debe documentar el informe pericial.',
    categoria: 'Incapacidad Permanente',
    fecha: '2026-11-01',
    lectura: '7',
    servicio: '/servicios/incapacidad-laboral/',
  },
];

export const postPorHref = (href: string) => posts.find((p) => p.href === href);
