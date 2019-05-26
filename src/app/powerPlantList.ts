import { GreenPowerPlant } from './greenPowerPlant';
import { ConvencionalPowerPlant } from './convencionalPowerPlant';
import { PowerPlant } from './powerPlant';



export const POWERPLANTS: PowerPlant[] = [
  new GreenPowerPlant(0, 'Wind Turbine', 1, 'wind'),
  new GreenPowerPlant(1, 'Solar Panel', 10, 'solar'),
  new GreenPowerPlant(2, 'Wave Power Plant', 1000, 'wave'),
  new GreenPowerPlant(3, 'Water Power Plant', 10000, 'water'),
  new GreenPowerPlant(4, 'Geothermal Power Plant', 50000, 'geo'),
  new ConvencionalPowerPlant(5, 'Coal Power Plant', 500, 'coal'),
  new ConvencionalPowerPlant(6, 'Biogas Power Plant', 5000, 'bio'),
  new ConvencionalPowerPlant(7, 'Oil Power Plant', 15000, 'oil'),
  new ConvencionalPowerPlant(8, 'Nuclear Power Plant', 250000, 'nuc'),
  new ConvencionalPowerPlant(9, 'Fusion Power Plant', 1000000, 'fus'),
];


