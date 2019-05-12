import { resources } from './resources';

export class PowerPlant {
  protected name: string;
  protected id: number;
  protected level = 0;
  protected buildings = 0;
  protected engineers = 0;
  protected priceMultiplier: number;
  protected productionMultiplier: number;
  protected greenPrice: number;

  constructor(id: number, name: string, priceMulti: number, productionMulti: number, greenPrice?: number) {
    this.name = name;
    this.priceMultiplier = priceMulti;
    this.productionMultiplier = productionMulti;
    this.greenPrice = greenPrice;
    this.id = id;
  }

  freeSpace() {
    return 2000 * (this.level + 1);
  }

  production(name: string, eventMulti: number) {
    const tempProduction: number = (this.buildings * this.productionMultiplier * (this.level + 1));
    if (this.name === name) {
      return  tempProduction + (tempProduction * this.engineers * 0.02) +
              (tempProduction * resources.getResources('workers') * 0.001) + (tempProduction * eventMulti);
    } else {
      return  tempProduction + (tempProduction * this.engineers * 0.02) +
              (tempProduction * resources.getResources('workers') * 0.001);
    }
  }

  buildPrice(num: number) {
    const lastPrice = (this.priceMultiplier * (7 * this.buildings + 3 * Math.pow(this.buildings, 2))) / 2;
    const newPrice = (this.priceMultiplier * (7 * (this.buildings + num) + 3 * Math.pow((this.buildings + num), 2))) / 2;
    return newPrice - lastPrice;
  }
  greenBuildPrice(num: number) {
    return null;
  }

  greenUpgradePrice(num: number) {
    return null;
  }

  upgradePrice(num: number) {
    const lastPrice = 250 * this.priceMultiplier * ((1 - Math.pow(2, this.level)) * (-1));
    const newPrice = 250 * this.priceMultiplier * ((1 - Math.pow(2, this.level + num)) * (-1));
    return newPrice - lastPrice;
  }

  hire(num: number) {
    if (num <= resources.getResources('workers')) {
      this.engineers += num;
      resources.setResources('wrokers', num);
    }
  }

  updateStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }

  setField(name: string, value: number): void {
    switch(name) {
      case 'buildings':
        this.buildings += value;
        break;
      case 'level':
        this.level += value;
        break;
      case 'engineers':
        this.engineers += value;
        break;
    }
  }

  getField(name: string): any {
    switch(name) {
      case 'buildings':
        return this.buildings;
      case 'level':
        return this.level;
      case 'name':
        return this.name;
      case 'id':
        return this.id;
      case 'engineers':
        return this.engineers;
      case 'greenPrice':
        return this.greenBuildPrice;
    }
  }
}
