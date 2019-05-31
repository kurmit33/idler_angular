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
  onOff: boolean;
  color = 'warn';
  time = office.sellTime();
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
    const sellTimer = timer(this.time, this.time);
    sellTimer.subscribe(val => {
      if ((resources.energyPrice >= this.minPrice) && (this.onOff)) {
      resources.sellResources(office.sellEnergy());
      }
    });
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
    office.build(this.multi);
    this.time = office.sellTime();
    this.buildTest();
  }

  upgrade() {
    office.upgrade(this.multi);
    this.time = office.sellTime();
    this.upgradeTest();
  }

  buildTest() {
    if ((resources.money >= office.buildPrice(this.multi))
      && (this.multi <= this.office.freeSpace())) {
      this.buildButton = 'false';
    } else {
      this.buildButton = 'true';
    }
  }

  upgradeTest() {
    if ((resources.money >= office.upgradePrice(this.multi))
      && (this.office.freeSpace() <= (this.office.freeSpace() + this.office.buildings) / 2)) {
      this.upgradeButton = 'false';
    } else {
      this.upgradeButton = 'true';
    }
  }
}
