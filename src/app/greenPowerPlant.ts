import { PowerPlant } from './powerPlant';
import { resources } from './resources';


export class GreenPowerPlant extends PowerPlant {
  public logoImage = 'assets/image/green-energy.jpg';
  public multi;
  constructor(id: number, name: string, multi: number, img: string) {
    super(id, name, multi, multi * 0.01, img);
    this.multi = multi;
  }

  build(num: number) {
    if ((this.freeSpace() >= num) && (resources.money >= this.buildPrice(num))) {
      resources.money -= this.buildPrice(num);
      this.buildings += num;
      resources.greenCertyfiaction += (this.multi * num);
    }
  }

  upgrade(num: number) {
    if ((this.buildings >= ((this.freeSpace() + this.buildings) / 80)) && (resources.money >= this.upgradePrice(num))) {
      resources.money -= this.upgradePrice(num);
      this.level += num;
    }
  }
}
