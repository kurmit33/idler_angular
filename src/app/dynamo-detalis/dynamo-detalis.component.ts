import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { dynamo } from '../dynamo';
import { Observable, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { resources } from '../resources';
import { accu } from '../acumulators';

@Component({
  selector: 'app-dynamo-detalis',
  templateUrl: './dynamo-detalis.component.html',
  styleUrls: ['./dynamo-detalis.component.css']
})
export class DynamoDetalisComponent implements OnInit {
  dynamo = dynamo;
  @Input() multi: number;
  sell$: Observable<number>;
  num: number;
  upgradeButton = 'false';
  lastSellState = 99999999999;

  constructor(private store: Store<{ count: number }>) {
    this.sell$ = store.pipe(select('sell'));
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.multi = resources.multiplier;
    this.upgradeTest();
  }

  ngOnInit() {
    this.upgradeTest();
    const eventTimer = timer(100, 100);
    eventTimer.subscribe(val => {
      this.num = Number(this.sell$);
      if (this.lastSellState !== this.num) {
        this.upgradeTest();
      }
    });
  }

  upgrade() {
    dynamo.upgrade(this.multi);
    this.upgradeTest();
  }
  clickProduction() {
    if (accu.maxEnergy() <= (resources.energy + dynamo.production())) {
      resources.energy += dynamo.production();
    }
  }
  upgradeTest() {
    if (resources.money >= dynamo.upgradePrice(this.multi)) {
      this.upgradeButton = 'false';
    } else {
      this.upgradeButton = 'true';
    }
  }

}
