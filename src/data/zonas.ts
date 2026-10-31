// Registro único de fichas locales. Alimenta el hub de zonas, el footer, la home y la rejilla
// «otras zonas» de cada ficha: una ficha nueva se da de alta aquí y deja de nacer huérfana.
export interface Zona {
  nombre: string;
  href: string;
  grupo: 'barcelona' | 'metropolitana';
}

export const zonas: Zona[] = [
  { nombre: 'Eixample', href: '/perito-medico-eixample/', grupo: 'barcelona' },
  { nombre: 'Sarrià-Sant Gervasi', href: '/perito-medico-sarria-sant-gervasi/', grupo: 'barcelona' },
  { nombre: "L'Hospitalet de Llobregat", href: '/perito-medico-hospitalet/', grupo: 'metropolitana' },
  { nombre: 'Badalona', href: '/perito-medico-badalona/', grupo: 'metropolitana' },
  { nombre: 'Sabadell', href: '/perito-medico-sabadell/', grupo: 'metropolitana' },
  { nombre: 'Terrassa', href: '/perito-medico-terrassa/', grupo: 'metropolitana' },
  { nombre: 'Cornellà de Llobregat', href: '/perito-medico-cornella/', grupo: 'metropolitana' },
  { nombre: 'Mataró y el Maresme', href: '/perito-medico-mataro/', grupo: 'metropolitana' },
  { nombre: 'Sant Cugat del Vallès', href: '/perito-medico-sant-cugat/', grupo: 'metropolitana' },
  { nombre: 'Sant Boi de Llobregat', href: '/perito-medico-sant-boi/', grupo: 'metropolitana' },
  { nombre: 'El Prat de Llobregat', href: '/perito-medico-el-prat/', grupo: 'metropolitana' },
  { nombre: 'Viladecans', href: '/perito-medico-viladecans/', grupo: 'metropolitana' },
  { nombre: 'Granollers', href: '/perito-medico-granollers/', grupo: 'metropolitana' },
  { nombre: 'Mollet del Vallès', href: '/perito-medico-mollet/', grupo: 'metropolitana' },
];

export const HUB_ZONAS = '/perito-medico-area-metropolitana/';
