import { PowerPlant } from './powerPlant';
import { resources } from './resources';


export class GreenPowerPlant extends PowerPlant {
  constructor(id: number, name: string, multi: number) {
    super(id, name, multi, multi * 0.01 );
  }

  build(num: number) {
    if (this.freeSpace() >= (this.buildings + num)) {
      if ( resources.money >= this.buildPrice(num)) {
        resources.money -= this.buildPrice(num);
        this.buildings += num;
        resources.greenCertyfiaction += num;
      }
    }
  }

  upgrade(num: number) {
    if (this.buildings >= (this.freeSpace() / 80)) {
      if (resources.money >= this.upgradePrice(num)) {
        resources.money -= this.upgradePrice(num);
        this.level += num;
      }
    }
  }
}
