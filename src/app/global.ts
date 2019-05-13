import { resources } from './resources';

class Global {
  public multiplier = 1;
  public eventTitle: string;
  randomus(mini: number, maxi: number, multi: number): number {
    return Math.floor(Math.random() * (maxi - mini ) + mini ) * multi;
  }

  unLoad() {

  }

  changeNumber(num) {

  }

  updateLocalStorage() {
  }

}

export const globalFunctions = new Global();
