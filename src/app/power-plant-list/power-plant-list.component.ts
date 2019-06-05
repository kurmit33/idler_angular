import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { POWERPLANTS } from '../powerPlantList';
import { resources } from '../resources';
import { BreakpointObserver } from '@angular/cdk/layout';
import { accu } from '../acumulators';
import { office } from '../office';
import { controlRoom } from '../controlRoom';
import { dynamo } from '../dynamo';

@Component({
  selector: 'app-power-plant-list',
  templateUrl: './power-plant-list.component.html',
  styleUrls: ['./power-plant-list.component.css']
})

export class PowerPlantListComponent implements OnInit {
  powerPlants = POWERPLANTS;
  resources = resources;
  accu = accu;
  office = office;
  dynamo = dynamo;
  clickedID: number;
  divWidth = 0;
  columnNum = 20;
  selected: number;
  marginTop = 130;
  marginBottom = 70;
  controlRoom = controlRoom;
  @Input() multi: number;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onresize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      this.columns();
    }
  }

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.columns();
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
  }

  columns() {
    if (this.breakpointObserver.isMatched('(max-width: 635px)')) {
      this.columnNum = 4;
      if (this.breakpointObserver.isMatched('(max-width: 550px)')) {
      this.marginTop = 114;
      } else {
        this.marginTop = 130;
      }
    } else if (this.breakpointObserver.isMatched('(max-width: 935px)')) {
      this.columnNum = 8;
      this.marginTop = 130;
    } else if (this.breakpointObserver.isMatched('(max-width: 1249px)')) {
      this.columnNum = 12;
      this.marginTop = 130;
    } else if (this.breakpointObserver.isMatched('(max-width: 1599px)')) {
      this.columnNum = 16;
      this.marginTop = 130;
    } else {
      this.columnNum = 20;
      this.marginTop = 130;
    }
  }

  onSelect(id: number) {
    if (this.clickedID === id) { this.clickedID = -1; } else { this.clickedID = id; }
  }
}
