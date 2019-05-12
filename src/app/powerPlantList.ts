import { GreenPowerPlant } from './greenPowerPlant';
import { ConvencionalPowerPlant } from './convencionalPowerPlant';
import { PowerPlant } from './powerPlant';



export const POWERPLANTS: PowerPlant[] = [
  new GreenPowerPlant(0, 'Wind Turbine', 1),
  new GreenPowerPlant(1, 'Solar Panel', 10),
  new GreenPowerPlant(2, 'Wave Power Plant', 1000),
  new GreenPowerPlant(3, 'Water Power Plant', 10000),
  new GreenPowerPlant(4, 'Geothermal Power Plant', 50000),
  new ConvencionalPowerPlant(5, 'Coal Power Plant', 500),
  new ConvencionalPowerPlant(6, 'Biogas Power Plant', 5000),
  new ConvencionalPowerPlant(7, 'Oil Power Plant', 15000),
  new ConvencionalPowerPlant(8, 'Nuclear Power Plant', 250000),
  new ConvencionalPowerPlant(9, 'Fusion Power Plant', 1000000),
];
