import { PRODUCTIONEVENTS } from './productionEventsList';

class Resources {
  public money = 5;
  public workers = 0;
  public greenCertyfiaction = 0;
  public energy = 0;
  public energyPrice = 0;
  public name = 'Resources';
  public multiplier = 1;
  public multiplierEvents = 0 ;
  public titleEvents: string;

  randomus(mini: number, maxi: number, multi: number): number {
    return Math.floor(Math.random() * (maxi - mini ) + mini ) * multi;
  }

  changePrice() {
    this.energyPrice = this.randomus(10, 25, 0.01);
  }

  sellResources() {
    this.money += this.energy * this.energyPrice;
    this.energy = 0;
  }

  updateStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }

  changeEvent(num: number) {
    this.titleEvents = 'No Events!';
    this.multiplierEvents = 0;
    PRODUCTIONEVENTS.forEach((productionEvent) => {
      if (productionEvent.isOn(num)) {
        this.multiplierEvents = productionEvent.multi;
        this.titleEvents = productionEvent.title;
      }
    });
  }
}

export const resources = new Resources();
