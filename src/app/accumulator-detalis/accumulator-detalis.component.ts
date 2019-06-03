import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { resources } from '../resources';
import { accu } from '../acumulators';

@Component({
  selector: 'app-accumulator-detalis',
  templateUrl: './accumulator-detalis.component.html',
  styleUrls: ['./accumulator-detalis.component.css']
})
export class AccumulatorDetalisComponent implements OnInit {
  accu = accu;
  @Input() multi: number;
  sell$: Observable<number>;
  num: number;
  buildPrice: number;
  buildButton = 'false';
  upgradeButton = 'false';
  lastSellState = 99999999999;

  constructor(private store: Store<{ count: number }>) {
    this.sell$ = store.pipe(select('sell'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.multi = resources.multiplier;
    this.buildTest();
    this.upgradeTest();
  }

  ngOnInit() {
    this.buildTest();
    this.upgradeTest();
    const eventTimer = timer(100, 100);
    eventTimer.subscribe(val => {
      this.num = Number(this.sell$);
      if (this.lastSellState !== this.num) {
        this.buildTest();
        this.upgradeTest();
      }
    });
  }

  build() {
    accu.build(this.multi);
    this.buildTest();
  }

  upgrade() {
    accu.upgrade(this.multi);
    this.upgradeTest();
  }

  buildTest() {
    if ((resources.money >= accu.buildPrice(this.multi))
      && (this.multi + accu.buildings <= accu.freeSpace())) {
      this.buildButton = 'false';
    } else {
      this.buildButton = 'true';
    }
  }

  upgradeTest() {
    if ((resources.money >= accu.upgradePrice(this.multi))
      && ((5 + 5 * (this.multi + accu.level) * (this.multi + accu.level)) / 2 <= accu.buildings)) {
      this.upgradeButton = 'false';
    } else {
      this.upgradeButton = 'true';
    }
  }
}
