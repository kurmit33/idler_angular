import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { controlRoom } from '../controlRoom';
import { Observable, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { resources } from '../resources';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {
  controlRoom = controlRoom;
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
    this.hireTest();
    this.upgradeTest();
  }

  ngOnInit() {
    this.hireTest();
    this.upgradeTest();
    const eventTimer = timer(100, 100);
    eventTimer.subscribe(val => {
      this.num = Number(this.sell$);
      if (this.lastSellState !== this.num) {
        this.hireTest();
        this.upgradeTest();
      }
    });
  }

  hire() {
    controlRoom.hire(this.multi);
    this.hireTest();
  }

  upgrade() {
    controlRoom.upgrade(this.multi);
    this.upgradeTest();
  }

  hireTest() {
    if ((resources.money >= controlRoom.hirePrice(this.multi))
      && (this.multi + controlRoom.engineers <= controlRoom.freeSpace())) {
      this.buildButton = 'false';
    } else {
      this.buildButton = 'true';
    }
  }

  upgradeTest() {
    if (resources.money >= controlRoom.upgradePrice(this.multi)) {
      this.upgradeButton = 'false';
    } else {
      this.upgradeButton = 'true';
    }
  }
}

