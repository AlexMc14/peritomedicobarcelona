// Fuentes oficiales citadas en servicios y guías (todas comprobadas el 2026-10-31).
// Cada servicio de src/data/servicios.ts referencia las suyas por clave.
export const FUENTES = {
  lec: { nombre: 'Ley 1/2000, de Enjuiciamiento Civil (arts. 335 a 352, dictamen de peritos)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2000-323' },
  lrjs: { nombre: 'Ley 36/2011, reguladora de la jurisdicción social', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-15936' },
  lgss: { nombre: 'Real Decreto Legislativo 8/2015, Ley General de la Seguridad Social', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724' },
  rd1430: { nombre: 'Real Decreto 1430/2009, de incapacidad temporal (arts. 3, 4 y 6)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2009-15442' },
  ley35: { nombre: 'Ley 35/2015, de valoración de los daños y perjuicios causados en accidentes de circulación', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10197' },
  ley41: { nombre: 'Ley 41/2002, básica reguladora de la autonomía del paciente', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188' },
  ley40: { nombre: 'Ley 40/2015, de Régimen Jurídico del Sector Público (responsabilidad patrimonial)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
  rd888: { nombre: 'Real Decreto 888/2022, de reconocimiento del grado de discapacidad', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-17105' },
  ley8_2021: { nombre: 'Ley 8/2021, de apoyo a las personas con discapacidad en el ejercicio de su capacidad jurídica', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-9233' },
  inssIP: { nombre: 'Seguridad Social: incapacidad permanente', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10960' },
  inssIT: { nombre: 'Seguridad Social: incapacidad temporal', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10952' },
  salutAvaluacions: { nombre: 'Canal Salut (Generalitat): avaluacions mèdiques', url: 'https://canalsalut.gencat.cat/ca/salut-a-z/a/avaluacions-mediques/' },
  salutAlta: { nombre: 'Canal Salut (Generalitat): l\'alta mèdica', url: 'https://canalsalut.gencat.cat/ca/salut-a-z/a/avaluacions-mediques/alta-medica/' },
  salutIP: { nombre: 'Canal Salut (Generalitat): incapacitat permanent per treballar', url: 'https://canalsalut.gencat.cat/ca/salut-a-z/a/avaluacions-mediques/incapacitat-permanent-per-treballar/' },
  gencatDiscapacitat: { nombre: 'Tràmits Gencat: reconeixement i revisió del grau de discapacitat', url: 'https://web.gencat.cat/ca/tramits/tramits-temes/Reconeixement-del-grau-de-discapacitat' },
  cgpj: { nombre: 'Consejo General del Poder Judicial', url: 'https://www.poderjudicial.es/' },
} as const;

export type ClaveFuente = keyof typeof FUENTES;
