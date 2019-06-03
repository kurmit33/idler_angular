import { resources } from './resources';
import { ProductionEvent } from './productionEvent';

export class PowerPlant {
  public name: string;
  public id: number;
  public level = 0;
  public buildings = 0;
  public engineers = 0;
  public priceMultiplier: number;
  public productionMultiplier: number;
  public greenPrice: number;
  public logoImage: string;
  public image: string;

  constructor(id: number, name: string, priceMulti: number, productionMulti: number, image: string, greenPrice?: number) {
    this.name = name;
    this.priceMultiplier = priceMulti;
    this.productionMultiplier = productionMulti;
    this.greenPrice = greenPrice;
    this.id = id;
    this.image = 'assets/image/' + image + '.png';
  }

  freeSpace() {

    return 2000 * (this.level + 1);
  }

  production(event?: ProductionEvent) {
    const startProduction: number = (this.buildings * this.productionMultiplier * (this.level + 1));
    const tempProduction = startProduction + (startProduction * this.engineers * 0.02) +
      (startProduction * resources.workers * 0.001);
    if (!event) {
      return tempProduction;
    } else {
      if (this.name === event.name) {
        return tempProduction + (tempProduction * event.multi);
      } else {
        return tempProduction;
      }
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
    if (num <= resources.workers) {
      this.engineers += num;
      resources.workers -= num;
    }
  }

  build(num: number) {

  }

  upgrade(num: number) {

  }
  updateStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }
}
