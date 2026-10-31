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
