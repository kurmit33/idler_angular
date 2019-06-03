import { resources } from './resources';

export class Office {
  public buildings = 0;
  public level = 0;
  public name = 'Office';

  constructor() {
    if (localStorage.getItem('Office')) {
      this.getStorage();
    }
  }

  freeSpace(): number {
    return 10 * (this.level + 1);
  }
  buildPrice(num: number): number {
    return (this.level + 1) * 10 * num;
  }

  upgradePrice(num: number): number {
    const lastPrice = ((70 * this.level + 30 * Math.pow(this.level, 2)) / 2) * (this.buildings + 1);
    const newPrice = ((70 * (this.level + num) + 30 * Math.pow((this.level + num), 2)) / 2) * (this.buildings + 1);
    return newPrice - lastPrice;
  }

  sellEnergy(now?: any): number {
    const temp = this.buildings * 50;
    if (now) {
      return temp;
    } else if (resources.energy >= temp) {
      return temp;
    } else {
      return resources.energy;
    }
  }

  build(num: number) {
    if ((resources.money >= this.buildPrice(num)) && (this.freeSpace() >= num + this.buildings)) {
      resources.money -= this.buildPrice(num);
      this.buildings += num;
    }
  }

  upgrade(num: number) {
    if ((resources.money >= this.upgradePrice(num))
      && (5 * (num + this.level) <= this.buildings)) {
      resources.money -= this.upgradePrice(num);
      this.level += num;
    }
  }

  updateStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }

  sellTime() {
    if(this.level >= 590) {
      return 10;
    } else {
      return 600 - this.level * 1;
    }
  }
}

export let office = new Office();
