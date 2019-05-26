import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { POWERPLANTS } from '../powerPlantList';
import { resources } from '../resources';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-power-plant-list',
  templateUrl: './power-plant-list.component.html',
  styleUrls: ['./power-plant-list.component.css']
})

export class PowerPlantListComponent implements OnInit {
  powerPlants = POWERPLANTS;
  resources = resources;
  clickedID: number;
  lastdivWidth = 0;
  divWidth = 0;
  columnNum = 20;
  @Input() multi: number;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onresize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      this.columns();
      console.log(this.columnNum);
    }
  }

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.columns();
  }

  ngAfterViewInit() {
    setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
  }

  columns() {
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.columnNum = 4;
    } else if (this.breakpointObserver.isMatched('(max-width: 899px)')) {
      this.columnNum = 8;
    } else if (this.breakpointObserver.isMatched('(max-width: 1249px)')){
      this.columnNum = 12;
    } else if (this.breakpointObserver.isMatched('(max-width: 1599px)')){
      this.columnNum = 16;
    } else {
      this.columnNum = 20;
    }
  }

  onSelect(id: number) {
    if (this.clickedID === id) { this.clickedID = -1; } else { this.clickedID = id; }
  }
}
