import { PRODUCTIONEVENTS } from './productionEventsList';

class Resources {
  public money = 0;
  public workers = 0;
  public greenCertyfiaction = 0;
  public energy = 0;
  public energyPrice = 0.1;
  public name = 'Resources';
  public multiplier = 1;
  public event = PRODUCTIONEVENTS[10];
  public eventTime = 1200;
  public eventWork = 0;
  public timeOffline;

  randomus(mini: number, maxi: number, multi: number): number {
    return Math.floor(Math.random() * (maxi - mini ) + mini ) * multi;
  }

  changePrice() {
    this.energyPrice = this.randomus(10, 35, 0.01);
  }

  sellResources(num: any) {
    if (!num) {
      this.money += this.energy * this.energyPrice;
      this.energy = 0;
    } else {
      this.money += num * this.energyPrice;
      this.energy -= num;
    }
  }

  updateStorage() {
    this.timeOffline = Date.now();
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }

  changeEvent(num: number): any {
    PRODUCTIONEVENTS.forEach((productionEvent) => {
      if (productionEvent.isOn(num)) {
        this.event = productionEvent;
        return this.event;
      } else {
        return PRODUCTIONEVENTS[10];
      }
    });
  }
}

export const resources = new Resources();
