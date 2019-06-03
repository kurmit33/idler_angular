import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Observable, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { resources } from '../resources';
import { accu } from '../acumulators';
import { office } from '../office';

@Component({
  selector: 'app-office-detalis',
  templateUrl: './office-detalis.component.html',
  styleUrls: ['./office-detalis.component.css']
})

export class OfficeDetalisComponent implements OnInit {
  office = office;
  accu = accu;
  @Input() multi: number;
  sell$: Observable<number>;
  num: number;
  buildPrice: number;
  buildButton = 'false';
  upgradeButton = 'false';
  lastSellState = 99999999999;
  minPrice = 0.1;
  sellTicks = 0;
  onOff: boolean;
  color = 'warn';
  time = office.sellTime();
  constructor(private store: Store<{ count: number }>) {
    this.sell$ = store.pipe(select('sell'));
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.multi = resources.multiplier;
    this.buildTest();
    this.upgradeTest();
  }

  ngOnInit() {
    this.buildTest();
    this.upgradeTest();
    const sellTimer = timer(100, 100);
    sellTimer.subscribe(val => {
      this.num = Number(this.sell$);
      if (this.lastSellState !== this.num) {
        this.buildTest();
        this.upgradeTest();
      }
      if ((resources.energyPrice >= this.minPrice) && (this.onOff) && (this.sellTicks >= office.sellTime())) {
        resources.sellResources(office.sellEnergy());
        this.sellTicks = 0;
      } else if (this.onOff) {
        this.sellTicks++;
      } else {
        this.sellTicks = 0;
      }
    });
  }

  build() {
    office.build(this.multi);
    this.buildTest();
  }

  upgrade() {
    office.upgrade(this.multi);
    this.time = office.sellTime();
    this.upgradeTest();
  }

  buildTest() {
    if ((resources.money >= office.buildPrice(this.multi))
      && (this.multi + this.office.buildings <= this.office.freeSpace())) {
      this.buildButton = 'false';
    } else {
      this.buildButton = 'true';
    }
  }

  upgradeTest() {
    if ((resources.money >= office.upgradePrice(this.multi))
      && (5 * (this.multi + office.level) <= office.buildings)) {
      this.upgradeButton = 'false';
    } else {
      this.upgradeButton = 'true';
    }
  }
}
