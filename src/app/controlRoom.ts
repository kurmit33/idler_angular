import { resources } from './resources';

export class ControlRoom {
  public engineers = 0;
  public level = 0;
  public name = 'Control Room';

  constructor() {
    if (localStorage.getItem('Control Room')) {
      this.getStorage();
    }
  }

  freeSpace(): number {
    return 10 * (this.level + 1);
  }

  hirePrice(num: number): number {
    return (this.level + 1) * 10 * num;
  }

  upgradePrice(num: number): number {
    const lastPrice = (1000 * (7 * this.level + 3 * Math.pow(this.level, 2))) / 2;
    const newPrice = (1000 * (7 * (this.level + num) + 3 * Math.pow((this.level + num), 2))) / 2;
    return newPrice - lastPrice;
  }

  timeOffilne(): number {
    return Number(1800000 + 60000 * this.engineers);
  }

  multiplierOffline() {
    return 0.001 + this.level * 0.001;
  }

  hire(num: number) {
    if ((resources.money >= this.hirePrice(num))
      && (this.freeSpace() >= num + this.engineers)) {
      resources.money -= this.hirePrice(num);
      this.engineers += num;
    }
  }

  upgrade(num: number) {
    if (resources.money >= this.upgradePrice(num)) {
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

export let controlRoom = new ControlRoom();
