import { ProductionEvent } from './productionEvent';

export const PRODUCTIONEVENTS = [
  new ProductionEvent('Wind Turbine', 'Wind turbine produce ', 0, 20),
  new ProductionEvent('Solar Panel', 'Solar panel produce ', 20, 35),
  new ProductionEvent('Wave Power Plant', 'Wave power plant produce ', 35, 40),
  new ProductionEvent('Water Power Plant', 'Water power plant produce ', 40, 50),
  new ProductionEvent('Geothermal Power Plant', 'Geothermal power plant produce ', 50, 60),
  new ProductionEvent('Coal Power Plant', 'Coal power plant produce ', 60, 78),
  new ProductionEvent('Biogas Power Plant', 'Biogas power plant produce ', 78, 85),
  new ProductionEvent('Oil Power Plant', 'Oil power plant produce ', 85, 91),
  new ProductionEvent('Nuclear Power Plant', 'Nuclear power plant produce ', 91, 96),
  new ProductionEvent('Fusion Power Plant', 'Fusion power plant produce ', 96, 100),
  new ProductionEvent('No events!', 'n', 100, 150),
];
