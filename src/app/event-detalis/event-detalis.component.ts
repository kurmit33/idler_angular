import { Component, OnInit, SimpleChanges } from '@angular/core';
import { resources } from '../resources';
import { timer } from 'rxjs';
import { ProductionEvent } from '../productionEvent';

@Component({
  selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  event: ProductionEvent;
  title: string;
  timeLeft: number;

  constructor() { }

  ngOnInit() {
    const look = timer(100, 1000);
    look.subscribe(val => this.eventChange());
  }

  eventChange() {
    if (this.event !== resources.event) {
      this.title = resources.event.title;
      this.timeLeft = resources.eventTime - resources.eventWork;
    } else {
      this.timeLeft--;
    }
  }
}
