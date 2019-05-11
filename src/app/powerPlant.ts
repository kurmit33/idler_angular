import { Global } from './global';

export class PowerPlant {
  name: string;
  id: number;
  level = 0;
  buildings = 0;
  workers = 0;
  multipiler = 1;
  moneyPrice = 5;
  greenPrice = 0;
  freeSpace = 2000;

  constructor(id: number, name: string, multipiler: number, greenPrice?: number) {
    this.name = name;
    this.multipiler = multipiler;
    this.greenPrice = greenPrice;
    this.id = id;
  }

  update() {
  }

  updateStorage() {
    Global.updateLocalStorage();
  }
}
