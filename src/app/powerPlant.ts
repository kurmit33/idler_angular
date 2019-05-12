import { global } from './global';
import { resources } from './resources';

export class PowerPlant {
  name: string;
  id: number;
  level = 0;
  buildings = 0;
  engineers = 0;
  productionMultiplier: number;
  priceMultiplier: number;
  moneyPrice = 5;
  greenPrice = 0;
  startSpace = 2000;

  constructor(id: number, name: string, productionMulti: number, priceMulti: number, greenPrice?: number) {
    this.name = name;
    this.productionMultiplier = productionMulti;
    this.priceMultiplier = priceMulti;
    this.greenPrice = greenPrice;
    this.id = id;
  }

  freeSpace() {
    return this.startSpace * (this.level + 1);
  }

  production(name: string, eventMulti: number) {
    const tempProduction = (this.buildings * this.productionMultiplier * (this.level + 1));
    if (this.name === name) {
      return  tempProduction + (tempProduction * this.engineers * 0.02) +
              (tempProduction * resources.workers) + (tempProduction * eventMulti);
    } else {
      return  tempProduction + (tempProduction * this.engineers * 0.02) +
              (tempProduction * resources.workers);
    }
  }

  buildPrice(num: number) {
    const lastPrice = (this.priceMultiplier * (7 * this.buildings + 3 * Math.pow(this.buildings, 2))) / 2;
    const newPrice = (this.priceMultiplier * (7 * (this.buildings + num) + 3 * Math.pow((this.buildings + num), 2))) / 2;
    return newPrice - lastPrice;

  }

  upgradePrice(num: number) {
    const lastPrice = 250 * this.priceMultiplier * ((1 - Math.pow(2, this.level)) * (-1));
    const newPrice = 250 * this.priceMultiplier * ((1 - Math.pow(2, this.level + num)) * (-1));
    return newPrice - lastPrice;
  }

  hire(workers: number, num: number) {
    if (num <= workers) {
      this.engineers += num;
      resources.workers -= num;
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
