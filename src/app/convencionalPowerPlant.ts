import { PowerPlant } from './powerPlant';
import { resources } from './resources';

export class ConvencionalPowerPlant extends PowerPlant {
  public logoImage = 'assets/image/dirty-energy.jpg';
  constructor(id: number, name: string, multi: number, image: string) {
    super(id, name, multi, multi * 0.025, image, 5);
  }

  greenBuildPrice(num: number) {
    let temp = num * (this.buildings + 1) * this.priceMultiplier;
    if (Number.isNaN(temp)) return 9007199254740991;
    else return temp;
  }

  greenUpgradePrice(num: number) {
    let temp = num * (this.level + 1) * this.priceMultiplier * 50;
    if (Number.isNaN(temp)) return 9007199254740991;
    else return temp;
  }

  build(num: number) {
    if (this.freeSpace() >= (this.buildings + num)) {
      if ((resources.money >= this.buildPrice(num))
      && (resources.greenCertyfiaction >= this.greenBuildPrice(num))) {
        resources.money -= this.buildPrice(num);
        resources.greenCertyfiaction -= this.greenBuildPrice(num);
        this.buildings += num;
      }
    }
  }

  upgrade(num: number) {
    if (this.buildings >= (this.freeSpace() / 80)) {
      if ((resources.money >= this.upgradePrice(num))
      && (resources.greenCertyfiaction >= this.greenUpgradePrice(num))) {
        resources.money -= this.upgradePrice(num);
        resources.greenCertyfiaction -= this.greenUpgradePrice(num);
        this.level += num;
      }
    }
  }
}
