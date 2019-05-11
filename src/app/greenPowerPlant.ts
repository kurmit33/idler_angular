import { PowerPlant } from './powerPlant';

export class GreenPowerPlant extends PowerPlant{
  constructor(id, name, multipiler){
    super(id, name, multipiler*0.01);
  }
}
