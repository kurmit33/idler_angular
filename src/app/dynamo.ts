import { resources } from './resources';

export class Dynamo {
  public engineers = 0;
  public level = 0;
  public name = 'Dynamo';

  constructor() {
    if (localStorage.getItem('Dynamo')) {
      this.getStorage();
    }
  }

  production(): number {
    return this.level * 1 + 1;
  }

  upgradePrice(num: number): number {
    const lastPrice = (1 * (7 * this.level + 3 * Math.pow(this.level, 2))) / 2;
    const newPrice = (1 * (7 * (this.level + num) + 3 * Math.pow((this.level + num), 2))) / 2;
    return newPrice - lastPrice;
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

export let dynamo = new Dynamo();
