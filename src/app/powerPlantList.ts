import { GreenPowerPlant } from './greenPowerPlant';
import { ConvencionalPowerPlant } from './convencionalPowerPlant';
import { PowerPlant } from './powerPlant';



export const POWERPLANTS: PowerPlant[] = [
  new GreenPowerPlant(0, 'Wind Turbine', 1),
  new GreenPowerPlant(1, 'Solar Panel', 10),
  new ConvencionalPowerPlant(2, 'Coal Power Plant', 100, 5),
];
