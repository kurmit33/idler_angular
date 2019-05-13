import { globalFunctions } from './global';

export class ProductionEvent {
  name: string;
  title: string;
  chanceMin: number;
  chanceMax: number;
  eventTime: number;
  lessOrMore = '';
  workEvent: string;
  multi = 0;

  constructor(name, title, chanceMin, chanceMax){
    this.name = name;
    this.title = title;
    this.chanceMin = chanceMin;
    this.chanceMax = chanceMax;
  }

  isOn(num: number) {
    if (num >= this.chanceMin && num < this.chanceMax) {
      this.multi = this.goodOrBad();
      globalFunctions.eventTitle = this.title + this.lessOrMore + this.multi;
    } else if (num >= 100) {
      globalFunctions.eventTitle = 'No events!';
    } else {
      this.workEvent = '';
      this.multi = 0;
    }
  }

  goodOrBad() {
    if (globalFunctions.randomus(1, 2, 1) === 1) {
      this.lessOrMore = 'more energy. The multiplier is ';
      return globalFunctions.randomus(10, 50, 0.01);
    } else {
      this.lessOrMore = 'less energy. The multiplier is ';
      return -(globalFunctions.randomus(10, 50, 0.01));
    }
  }
}
