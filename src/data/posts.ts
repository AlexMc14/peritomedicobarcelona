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
];

export const postPorHref = (href: string) => posts.find((p) => p.href === href);
