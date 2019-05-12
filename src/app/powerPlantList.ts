import { GreenPowerPlant } from './greenPowerPlant';
import { ConvencionalPowerPlant } from './convencionalPowerPlant';
import { PowerPlant } from './powerPlant';



export const POWERPLANTS: PowerPlant[] = [
  new GreenPowerPlant(0, 'Wind Turbine', 1),
  new GreenPowerPlant(1, 'Solar Panel', 10),
  new GreenPowerPlant(1, 'Wave Power Plant', 1000),
  new GreenPowerPlant(1, 'Water Power Plant', 10000),
  new GreenPowerPlant(1, 'Geothermal Power Plant', 50000),
  new ConvencionalPowerPlant(2, 'Coal Power Plant', 500),
  new ConvencionalPowerPlant(2, 'Biogas Power Plant', 5000),
  new ConvencionalPowerPlant(2, 'Oil Power Plant', 15000),
  new ConvencionalPowerPlant(2, 'Nuclear Power Plant', 250000),
  new ConvencionalPowerPlant(2, 'Fusion Power Plant', 1000000),
];
