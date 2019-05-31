import { resources } from './resources';

export class Acumulator {
  public buildings = 0;
  public level = 0;
  public name = 'Accumulators';

  constructor() {
    if (localStorage.getItem('Accumulators')) {
      this.getStorage();
    }
  }

  freeSpace(): number {
    return (10 * (this.level + 1) - this.buildings);
  }
  buildPrice(num: number): number {
    return (this.level + 1) * 10 * num;
  }

  upgradePrice(num: number): number {
    const lastPrice = ((70 * this.level + 30 * Math.pow(this.level, 2)) / 2) * (this.buildings + 1);
    const newPrice = ((70 * (this.level + num) + 30 * Math.pow((this.level + num), 2)) / 2) * (this.buildings + 1);
    return newPrice - lastPrice;
  }

  maxEnergy(): number {
    return Math.floor(((this.level) * 0.25 * (this.buildings + 1) * 50) + (this.buildings + 1) * 50);
  }

  build(num: number) {
    if ((resources.money >= this.buildPrice(num)) && (this.freeSpace() >= num)) {
      resources.money -= this.buildPrice(num);
      this.buildings += num;
    }
  }

  upgrade(num: number) {
    if ((resources.money >= this.upgradePrice(num)) && (this.freeSpace() <= (this.freeSpace() + this.buildings) / 2)) {
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
}

export let accu = new Acumulator();
