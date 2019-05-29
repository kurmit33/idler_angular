import { Component, OnInit, SimpleChanges, HostListener, ViewChild, ElementRef } from '@angular/core';
import { resources } from '../resources';
import { timer } from 'rxjs';
import { ProductionEvent } from '../productionEvent';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-event-detalis',
  templateUrl: './event-detalis.component.html',
  styleUrls: ['./event-detalis.component.css']
})
export class EventDetalisComponent implements OnInit {
  event: ProductionEvent;
  title: string;
  timeLeft: number;
  divWidth = 0;
  rwd = false;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onresize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      this.toolbar();
    }
  }

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.toolbar();
    const look = timer(100, 1000);
    look.subscribe(val => this.eventChange());
  }

  ngAfterViewInit() {
    setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
  }

  eventChange() {
    if (this.event !== resources.event) {
      this.title = resources.event.title;
      this.timeLeft = resources.eventTime - resources.eventWork;
    } else {
      this.timeLeft--;
    }
  }

  toolbar() {
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
      this.rwd = true;
    } else {
      this.rwd = false;
    }
  }
}
