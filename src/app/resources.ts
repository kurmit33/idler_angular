class Resources {
  private money = 0;
  private workers = 0;
  private greenCertyfiaction = 0;
  private energy = 0;
  private energyPrice = 0;
  private greenPrice = 0;
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
      case 'energy':
        return this.energy;
      case 'energyPrice':
        return this.energyPrice;
      case 'greenPrice':
        return this.greenPrice;
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
        this.energy += num;
        break;
    }
  }

  changePrice() {

  }

  sellResources() {
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
