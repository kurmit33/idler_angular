import { Component, OnInit, SimpleChanges } from '@angular/core';
import { resources } from '../resources';
import { timer } from 'rxjs';

@Component({
  selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  multi = 0;
  title = '';
  timeLeft: number;

  constructor() { }

  ngOnInit() {
    const look = timer(100, 1000);
    look.subscribe(val => this.eventChange());

  }

  eventChange() {
    if (this.multi !== resources.multiplierEvents || this.title !== resources.titleEvents || this.timeLeft <= 0) {
      this.multi = resources.multiplierEvents;
      this.title = resources.titleEvents;
      this.timeLeft = 120;
    } else {
      this.timeLeft--;
    }
  }
}
