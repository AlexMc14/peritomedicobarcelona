// Datos de contacto únicos de la web: cualquier teléfono, WhatsApp o NAP sale de aquí.
export const SITE = {
  nombre: 'Perito Médico Barcelona',
  url: 'https://www.peritomedicobarcelona.com',
  telefono: '+34 692 36 61 04',
  email: 'info@peritomedicobarcelona.com',
};

const telefonoDigitos = SITE.telefono.replace(/\D/g, '');
export const telHref = `tel:+${telefonoDigitos}`;
export const whatsappHref = `https://wa.me/${telefonoDigitos}?text=${encodeURIComponent(
  'Hola, quiero consultar mi caso con un perito médico.',
)}`;

/** Autoría de guías y páginas: va a nombre del equipo (marca), nunca de una persona. */
export const AUTORIA = 'el equipo médico de Perito Médico Barcelona';
/** Titular legal de la web (solo para páginas legales y legalName del JSON-LD) */
export const TITULAR = {
  razonSocial: 'Lukeraibra SL',
  cif: 'B10753648',
  domicilio: 'Calle De la Lírica, 13, CP 28905 Getafe, Madrid',
  email: 'lsanchezamo@yahoo.es',
};
/** Última revisión general de servicios (cambiar al revisar el contenido) */
export const REVISION_SERVICIOS = '2026-10-31';

export const ORG_ID = `${SITE.url}/#organizacion`;
