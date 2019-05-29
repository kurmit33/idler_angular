export class ProductionEvent {
  name: string;
  title: string;
  nameTitle: string;
  chanceMin: number;
  chanceMax: number;
  eventTime: number;
  lessOrMore = '';
  multi: number;

  constructor(name: string, nameTitle: string, chanceMin: number, chanceMax: number) {
    this.name = name;
    this.nameTitle = nameTitle;
    this.chanceMin = chanceMin;
    this.chanceMax = chanceMax;
  }

  randomus(mini: number, maxi: number, multi: number): number {
    let temp: number;
    temp = Number(Math.floor(Math.random() * (maxi - mini) + mini) * multi);
    return temp;
  }

  isOn(num: number) {
    this.multi = 0;
    this.title = '';
    if (num >= this.chanceMin && num < this.chanceMax) {
      if (this.nameTitle === 'n') {
        this.title = 'No event!';
        return true;
      } else {
        this.multi = this.goodOrBad();
        const multiTitle = this.multi.toFixed(2);
        this.title = this.nameTitle + this.lessOrMore + multiTitle;
        return true;
      }
    } else if (num >= 100) {
      this.title = 'No events!';
      return false;
    } else {
      this.title = 'No events!';
      return false;
    }
  }

  goodOrBad(): number {
    if (this.randomus(1, 3, 1) === 1) {
      this.lessOrMore = ' multi: ';
      return this.randomus(10, 50, 0.01);
    } else {
      this.lessOrMore = ' multi: ';
      const temp = (this.randomus(50, 100, 0.01) - 1);
      return temp;
    }
  }
}
