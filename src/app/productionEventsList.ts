import { ProductionEvent } from './productionEvent';

export const PRODUCTIONEVENTS = [
  new ProductionEvent('Wind Turbine', 'Wind turbine produce ', 0, 20),
  new ProductionEvent('Solar Panel', 'Solar panel produce ', 20, 35),
  new ProductionEvent('Wave Power Plant', 'Wave produce ', 35, 40),
  new ProductionEvent('Water Power Plant', 'Water produce ', 40, 50),
  new ProductionEvent('Geothermal Power Plant', 'Geothermal produce ', 50, 60),
  new ProductionEvent('Coal Power Plant', 'Coal produce ', 60, 78),
  new ProductionEvent('Biogas Power Plant', 'Biogas produce ', 78, 85),
  new ProductionEvent('Oil Power Plant', 'Oil produce ', 85, 91),
  new ProductionEvent('Nuclear Power Plant', 'Nuclear  produce ', 91, 96),
  new ProductionEvent('Fusion Power Plant', 'Fusion produce ', 96, 100),
  new ProductionEvent('No events!', 'n', 100, 150),
];
