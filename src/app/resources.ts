import { globalFunctions } from './global';
import { timer } from 'rxjs';

class Resources {
  private money = 0;
  private workers = 0;
  private greenCertyfiaction = 0;
  private electricty = 0;
  private electrictyPrice = 0;
  private name = 'Resources';

  constructor() {
    if (localStorage.length > 0) {

    }
  }

  getResources(what: string) {
    switch (what) {
      case 'money':
        return this.money;
      case 'workers':
        return this.workers;
      case 'greenCertyfiaction':
        return this.greenCertyfiaction;
      case 'electricty':
        return this.electricty;
      case 'electrictyPrice':
        return this.electrictyPrice;
    }
  }
  setResources(what: string, num: number) {
    switch (what) {
      case 'money':
        this.money += num;
        break;
      case 'workers':
        this.workers += num;
        break;
      case 'greenCertyfiaction':
        this.greenCertyfiaction += num;
        break;
      case 'energy':
        this.electricty += num;
        break;
    }
  }

  changePrice() {
    this.electrictyPrice = globalFunctions.randomus(10, 25, 0.01);
  }

  sellResources() {
    this.money += this.electricty * this.electrictyPrice;
  }

  updateStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  getStorage() {
    const items = JSON.parse(localStorage.getItem(this.name));
    Object.assign(this, items);
  }
}

export const resources = new Resources();
