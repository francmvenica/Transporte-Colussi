// Clientes reales — logos entregados por Juan Manuel (2026-07-27), 26 en total.
// Reemplaza el listado provisorio de 7 nombres sin logo (brief de la empresa, 2026-07-26).
// Nombres verificados contra lo que dice cada imagen, no contra el nombre de archivo
// de origen (varios archivos venían mal nombrados o con errores de tipeo).
//
// PENDIENTE: quedó un logo sin incorporar — "g.png" del material entregado, una "G"
// estilizada sin texto ni marca reconocible. No se pudo identificar de qué empresa es.
// Preguntar a Juan Manuel antes de sumarlo (no se publica un logo con alt inventado).
//
// `featured` decide la zona: true = grilla estática de arriba, false = cinta de abajo.
// Mover un cliente de zona es cambiar este booleano, nada más.
import type { ImageMetadata } from 'astro';

import nestle from '../assets/images/clientes/nestle.png';
import arcor from '../assets/images/clientes/arcor.png';
import walmart from '../assets/images/clientes/walmart.png';
import quilmes from '../assets/images/clientes/quilmes.png';
import aguasDanone from '../assets/images/clientes/aguas-danone.png';
import molinosRioDeLaPlata from '../assets/images/clientes/molinos-rio-de-la-plata.png';
import establecimientoLasMarias from '../assets/images/clientes/establecimiento-las-marias.png';
import softys from '../assets/images/clientes/softys.png';
import vicentin from '../assets/images/clientes/vicentin.png';
import chep from '../assets/images/clientes/chep.png';
import ferrum from '../assets/images/clientes/ferrum.png';
import aconTimber from '../assets/images/clientes/acon-timber.png';
import buyatti from '../assets/images/clientes/buyatti.png';
import grupoCepas from '../assets/images/clientes/grupo-cepas.png';
import unionAgricolaAvellaneda from '../assets/images/clientes/union-agricola-avellaneda.png';
import rpbBaggio from '../assets/images/clientes/rpb-baggio.png';
import grupoDeNarvaez from '../assets/images/clientes/grupo-de-narvaez.png';
import molinosAgro from '../assets/images/clientes/molinos-agro.png';
import molinoCanuelas from '../assets/images/clientes/molino-canuelas.png';
import nutricorrientes from '../assets/images/clientes/nutricorrientes.png';
import solfrut from '../assets/images/clientes/solfrut.png';
import fiplasto from '../assets/images/clientes/fiplasto.png';
import colven from '../assets/images/clientes/colven.png';
import malsa from '../assets/images/clientes/malsa.png';
import sanesa from '../assets/images/clientes/sanesa.png';
import cefas from '../assets/images/clientes/cefas.png';

export interface Client {
  name: string;
  image: ImageMetadata;
  featured: boolean;
}

export const CLIENTS: Client[] = [
  // Destacados (zona 1, grilla estática arriba)
  { name: 'Nestlé', image: nestle, featured: true },
  { name: 'Arcor', image: arcor, featured: true },
  { name: 'Walmart', image: walmart, featured: true },
  { name: 'Quilmes', image: quilmes, featured: true },
  { name: 'Aguas Danone', image: aguasDanone, featured: true },
  { name: 'Molinos Río de la Plata', image: molinosRioDeLaPlata, featured: true },
  { name: 'Establecimiento Las Marías', image: establecimientoLasMarias, featured: true },
  { name: 'Softys', image: softys, featured: true },
  // Resto (zona 2, cinta animada abajo)
  { name: 'Vicentin', image: vicentin, featured: false },
  { name: 'CHEP', image: chep, featured: false },
  { name: 'Ferrum', image: ferrum, featured: false },
  { name: 'ACON TIMBER', image: aconTimber, featured: false },
  { name: 'Buyatti', image: buyatti, featured: false },
  { name: 'Grupo Cepas', image: grupoCepas, featured: false },
  { name: 'Unión Agrícola de Avellaneda', image: unionAgricolaAvellaneda, featured: false },
  { name: 'RPB Baggio', image: rpbBaggio, featured: false },
  { name: 'Grupo de Narváez', image: grupoDeNarvaez, featured: false },
  { name: 'Molinos Agro', image: molinosAgro, featured: false },
  { name: 'Molino Cañuelas', image: molinoCanuelas, featured: false },
  { name: 'NutriCorrientes', image: nutricorrientes, featured: false },
  { name: 'SolFrut', image: solfrut, featured: false },
  { name: 'Fiplasto', image: fiplasto, featured: false },
  { name: 'Colven', image: colven, featured: false },
  { name: 'Malsa', image: malsa, featured: false },
  { name: 'Sanesa', image: sanesa, featured: false },
  { name: 'CEFAS', image: cefas, featured: false },
];

// Sectores atendidos (brief de la empresa, sección 4 y 9).
export const SECTORS: string[] = [
  'Consumo masivo',
  'Alimentos',
  'Yerba mate',
  'Papel y tissue',
  'Madera',
];
