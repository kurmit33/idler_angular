import { PowerPlant } from './powerPlant';
import { resources } from './resources';

export class ConvencionalPowerPlant extends PowerPlant {
  constructor(id: number, name: string, multi: number) {
    super(id, name, multi, multi * 0.025, 5);
  }

  greenBuildPrice(num: number) {
    return num * (this.buildings + 1) * this.priceMultiplier;
  }

  greenUpgradePrice(num: number) {
    return num * (this.level + 1) * this.priceMultiplier * 50;
  }

  build(num: number) {
    if (this.freeSpace() >= (this.buildings + num)) {
      if ((resources.getResources('money') >= this.buildPrice(num))
      && (resources.getResources('greenCertyfiaction') >= this.greenBuildPrice(num))) {
        resources.setResources('money', -this.buildPrice(num));
        resources.setResources('greenCertyfiaction', -this.greenBuildPrice(num));
        this.buildings += num;
      }
    }
  }

  upgrade(num: number) {
    if (this.buildings >= (this.freeSpace() / 80)) {
      if ((resources.getResources('money') >= this.upgradePrice(num))
      && (resources.getResources('greenCertyfiaction') >= this.greenUpgradePrice(num))) {
        resources.setResources('money', -this.upgradePrice(num));
        resources.setResources('greenCertyfiaction', -this.greenUpgradePrice(num));
        this.level += num;
      }
    }
  }
}
