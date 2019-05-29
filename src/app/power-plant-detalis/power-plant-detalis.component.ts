import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PowerPlant } from '../powerPlant';
import { resources } from '../resources';
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-power-plant-detalis',
  templateUrl: './power-plant-detalis.component.html',
  styleUrls: ['./power-plant-detalis.component.css']
})
export class PowerPlantDetalisComponent implements OnInit {
  @Input() powerPlant: PowerPlant;
  @Input() multi: number;
  buildButton = 'false';
  upgradeButton = 'false';
  hireButton = 'false';
  lastSellState = 99999999999;
  sell$: Observable<number>;
  num: number;
  @Input() money: number;

  constructor(private store: Store<{ count: number }>) {
    this.sell$ = store.pipe(select('sell'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.multi = resources.multiplier;
    this.buildTest();
    this.upgradeTest();
    this.hireTest();
  }
  ngOnInit() {
    this.buildTest();
    this.upgradeTest();
    this.hireTest();
    const eventTimer = timer(100, 100);
    eventTimer.subscribe(val => {
      this.num = Number(this.sell$);
      if (this.lastSellState != this.num) {
        this.buildTest();
        this.upgradeTest();
        this.hireTest();
      }
    });
  }

  build() {
    this.powerPlant.build(this.multi);
    this.buildTest();
  }

  upgrade() {
    this.powerPlant.upgrade(this.multi);
    this.upgradeTest();
  }

  hire() {
    this.powerPlant.hire(this.multi);
    this.hireTest();
  }

  buildTest() {
    if (this.powerPlant.greenBuildPrice) {
      if ((this.powerPlant.buildPrice(this.multi) <= resources.money)
        && (this.powerPlant.greenBuildPrice(this.multi) <= resources.greenCertyfiaction)) {
        this.buildButton = 'false';
      } else {
        this.buildButton = 'true';
      }
    } else {
      if (this.powerPlant.buildPrice(this.multi) <= resources.money) {
        this.buildButton = 'false';
      } else {
        this.buildButton = 'true';
      }
    }
  }

  hireTest() {
    if (this.multi <= resources.workers) {
      this.hireButton = 'false';
    } else {
      this.hireButton = 'true';
    }
  }

  upgradeTest() {
    if (this.powerPlant.greenBuildPrice) {
      if ((this.powerPlant.upgradePrice(this.multi) <= resources.money)
        && (this.powerPlant.greenUpgradePrice(this.multi) <= resources.greenCertyfiaction)
        && (this.powerPlant.buildings >= this.powerPlant.level * 25)) {
        this.upgradeButton = 'false';
      } else {
        this.upgradeButton = 'true';
      }
    } else {
      if ((this.powerPlant.upgradePrice(this.multi) <= resources.money) && (this.powerPlant.buildings >= this.powerPlant.level * 25)) {
        this.upgradeButton = 'false';
      } else {
        this.upgradeButton = 'true';
      }
    }
  }
}
