// Registro único de servicios, páginas para abogados y especialidades. Alimenta el header,
// el footer, la home, los hubs y los bloques de relacionados: una página nueva se da de alta aquí.
import type { ClaveFuente } from './fuentes';

export interface Servicio {
  nombre: string;
  href: string;
  descripcion: string;
  /** Landing de consulta telefónica asociada (par servicio ↔ landing) */
  landing?: { nombre: string; href: string };
  /** Fuentes oficiales que se muestran en la página (claves de fuentes.ts) */
  fuentes: ClaveFuente[];
}

export const servicios: Servicio[] = [
  {
    nombre: 'Informes Periciales Médicos',
    href: '/servicios/informes-periciales-medicos/',
    descripcion: 'Elaboración de informes periciales médicos detallados y fundamentados para procesos judiciales y extrajudiciales.',
    landing: { nombre: 'Consulta telefónica con un perito médico', href: '/perito-medico-consulta-gratuita/' },
    fuentes: ['lec', 'lrjs', 'cgpj'],
  },
  {
    nombre: 'Negligencia Médica',
    href: '/servicios/negligencia-medica/',
    descripcion: 'Evaluación experta de posibles casos de mala praxis médica con análisis de la lex artis y nexo causal.',
    landing: { nombre: 'Consulta sobre negligencia médica', href: '/negligencia-medica-consulta-gratuita/' },
    fuentes: ['ley41', 'ley40', 'lec'],
  },
  {
    nombre: 'Valoración del Daño Corporal',
    href: '/servicios/valoracion-dano-corporal/',
    descripcion: 'Cuantificación médico-legal de las lesiones y secuelas conforme al baremo vigente.',
    landing: { nombre: 'Valoración telefónica del daño corporal', href: '/valoracion-dano-corporal-gratuita/' },
    fuentes: ['ley35', 'lec'],
  },
  {
    nombre: 'Incapacidad Laboral',
    href: '/servicios/incapacidad-laboral/',
    descripcion: 'Valoración de la capacidad funcional para procesos de incapacidad permanente en cualquier grado.',
    landing: { nombre: 'Consulta sobre incapacidad permanente', href: '/incapacidad-permanente-consulta-gratuita/' },
    fuentes: ['lgss', 'inssIP', 'salutIP', 'lrjs'],
  },
  {
    nombre: 'Perito Seguridad Social',
    href: '/servicios/perito-seguridad-social/',
    descripcion: 'Informes periciales para procedimientos ante el INSS: incapacidad, revisión de grado y contingencia.',
    landing: { nombre: 'Consulta sobre incapacidad permanente', href: '/incapacidad-permanente-consulta-gratuita/' },
    fuentes: ['lgss', 'inssIP', 'inssIT', 'lrjs'],
  },
  {
    nombre: 'Impugnación de Alta Médica',
    href: '/servicios/impugnacion-alta-medica/',
    descripcion: 'Análisis médico-pericial para impugnar altas médicas indebidas ante el INSS o Mutuas.',
    landing: { nombre: 'Revisión del alta médica', href: '/revision-alta-medica-gratuita/' },
    fuentes: ['rd1430', 'lrjs', 'salutAlta', 'inssIT'],
  },
  {
    nombre: 'Accidente de Trabajo',
    href: '/servicios/accidente-trabajo/',
    descripcion: 'Informe pericial de lesiones y secuelas derivadas de un accidente de trabajo o enfermedad profesional.',
    landing: { nombre: 'Consulta sobre accidente de trabajo', href: '/accidente-trabajo-gratuita/' },
    fuentes: ['lgss', 'rd1430', 'inssIT', 'lrjs'],
  },
  {
    nombre: 'Accidentes Laborales',
    href: '/accidente-laboral/',
    descripcion: 'Peritaje médico de accidentes laborales: lesiones, secuelas, contingencia e incapacidad.',
    landing: { nombre: 'Consulta sobre accidente de trabajo', href: '/accidente-trabajo-gratuita/' },
    fuentes: ['lgss', 'rd1430', 'inssIT', 'lrjs'],
  },
  {
    nombre: 'Accidentes de Tráfico',
    href: '/accidentes-de-trafico/',
    descripcion: 'Valoración de lesiones y secuelas de accidentes de tráfico conforme al baremo de la Ley 35/2015.',
    landing: { nombre: 'Valoración telefónica del daño corporal', href: '/valoracion-dano-corporal-gratuita/' },
    fuentes: ['ley35', 'lec'],
  },
  {
    nombre: 'Reclamaciones a Seguros',
    href: '/perito-medico-para-seguros/',
    descripcion: 'Informes periciales para reclamar a compañías aseguradoras cuando la indemnización ofrecida es insuficiente.',
    landing: { nombre: 'Valoración telefónica del daño corporal', href: '/valoracion-dano-corporal-gratuita/' },
    fuentes: ['ley35', 'lec'],
  },
  {
    nombre: 'Discapacidad',
    href: '/servicios/discapacidad/',
    descripcion: 'Valoración del grado de discapacidad y asesoramiento para su reconocimiento administrativo.',
    landing: { nombre: 'Valoración telefónica del grado de discapacidad', href: '/valoracion-discapacidad-gratuita/' },
    fuentes: ['rd888', 'gencatDiscapacitat'],
  },
  {
    nombre: 'Curatela y Medidas de Apoyo',
    href: '/servicios/curatela-medidas-apoyo/',
    descripcion: 'Informes periciales para procedimientos de determinación de capacidad y medidas de apoyo.',
    fuentes: ['ley8_2021', 'lec'],
  },
  {
    nombre: 'Determinación de Contingencia',
    href: '/servicios/determinacion-contingencia/',
    descripcion: 'Análisis pericial para determinar el origen laboral o común de una patología.',
    landing: { nombre: 'Consulta sobre determinación de contingencia', href: '/determinacion-contingencia-gratuita/' },
    fuentes: ['rd1430', 'lgss', 'inssIT'],
  },
  {
    nombre: 'Segunda Opinión Médico-Legal',
    href: '/servicios/segunda-opinion-medico-legal/',
    descripcion: 'Revisión independiente de informes periciales existentes con análisis crítico y fundamentado.',
    landing: { nombre: 'Segunda opinión médico-legal: consulta telefónica', href: '/segunda-opinion-medico-legal-gratuita/' },
    fuentes: ['lec', 'lrjs'],
  },
  {
    nombre: 'Estudio de Viabilidad del Caso',
    href: '/servicios/estudio-viabilidad/',
    descripcion: 'Análisis preliminar para evaluar las posibilidades médico-legales de su caso.',
    landing: { nombre: 'Consulta telefónica con un perito médico', href: '/perito-medico-consulta-gratuita/' },
    fuentes: ['lec', 'lrjs'],
  },
];

export const abogados = [
  { nombre: 'Asesoramiento Técnico', href: '/para-abogados/asesoramiento-tecnico/', descripcion: 'Apoyo médico-legal al despacho antes y durante el procedimiento.' },
  { nombre: 'Ratificación Judicial', href: '/para-abogados/ratificacion-judicial/', descripcion: 'Defensa del informe pericial en sala ante el juez y las partes.' },
  { nombre: 'Revisión de Informes Periciales', href: '/para-abogados/revision-informes/', descripcion: 'Análisis crítico del informe de la parte contraria.' },
  { nombre: 'Contrainforme Pericial', href: '/para-abogados/contrainforme-pericial/', descripcion: 'Informe que rebate con fundamento el dictamen de la otra parte.' },
];

export const especialidades = [
  { nombre: 'Traumatología', href: '/especialidades/traumatologia/' },
  { nombre: 'Neurología', href: '/especialidades/neurologia/' },
  { nombre: 'Psiquiatría', href: '/especialidades/psiquiatria/' },
  // ponytail: sin página propia, apuntan al anclaje del hub hasta que exista la página
  { nombre: 'Medicina del Trabajo', href: '/especialidades/#medicina-trabajo' },
  { nombre: 'Rehabilitación', href: '/especialidades/#rehabilitacion' },
  { nombre: 'Ginecología y Obstetricia', href: '/especialidades/#ginecologia' },
  { nombre: 'Cirugía', href: '/especialidades/#cirugia' },
  { nombre: 'Urgencias', href: '/especialidades/#urgencias' },
  { nombre: 'Medicina Interna', href: '/especialidades/#medicina-interna' },
];

/** Busca el servicio por ruta (con barra final) */
export const servicioPorHref = (href: string) => servicios.find((s) => s.href === href);
