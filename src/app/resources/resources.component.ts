import { Component, OnInit, HostListener, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { resources } from '../resources';
import { timer } from 'rxjs';
import { POWERPLANTS } from '../powerPlantList';
import { ProductionEvent } from '../productionEvent';
import { PRODUCTIONEVENTS } from '../productionEventsList';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  event: ProductionEvent;
  resources = resources;
  powerPlants = POWERPLANTS;
  productionEvents = PRODUCTIONEVENTS;
  multi = 1;
  selected: string;
  divWidth = 0;
  rwd = false;
  productionS: number;
  priceTime = 0;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onresize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      this.toolbar();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.toolbar();
    if (!localStorage.getItem('Resources')) {
      localStorage.clear();
    } else {
      resources.getStorage();
      POWERPLANTS.forEach((powerPlant) => {
        powerPlant.getStorage();
      });
      this.multi = resources.multiplier;
      this.offlineProduction();
    }
    this.selected = this.multi.toString();
    const productionTimer = timer(100, 100);
    const eventTimer = timer(100, 1000);
    productionTimer.subscribe(val => this.production());
    eventTimer.subscribe(val => {
      if(this.priceTime >= 60 ){
        resources.changePrice();
        this.priceTime = 0;
      } else {
        this.priceTime++;
      }
      if(resources.eventTime - resources.eventWork <= 0){
      this.event = resources.changeEvent(resources.randomus(0, 150, 1));
      this.productionPerS();
      resources.eventWork = 0;
      } else {
        resources.eventWork++;
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    resources.updateStorage();
    POWERPLANTS.forEach((powerPlant) => {
      powerPlant.updateStorage();
    });
  }

  toolbar() {
    if (this.breakpointObserver.isMatched('(max-width: 635px)')) {
      this.rwd = true;
    } else {
      this.rwd = false;
    }
  }
  onSelect() {
    this.multi = parseInt(this.selected, 10);
    resources.multiplier = this.multi;
  }

  production() {
    let tempProduction = 0;
    if (!this.event) {
      this.powerPlants.forEach((powerPlant) => {
        tempProduction += powerPlant.production();
      });
    } else {
      this.powerPlants.forEach((powerPlant) => {
        tempProduction += powerPlant.production(this.event);
      });
    }
    resources.energy += tempProduction;
  }

  sellEnergy() {
    resources.sellResources();
  }

  reset() {
    let temp = 0;
    let tempEng = 0;
    POWERPLANTS.forEach((powerPlant) => {
      temp += powerPlant.buildings;
      tempEng += powerPlant.engineers;
      powerPlant.buildings = 0;
      powerPlant.level = 0;
      powerPlant.engineers = 0;
      powerPlant.updateStorage();
    });
    resources.money = 5;
    resources.energy = 0;
    resources.greenCertyfiaction = 0;
    resources.multiplier = 1;
    resources.workers += Math.floor(Math.floor(temp / 2000) + Math.floor(tempEng * 0.4));
    resources.updateStorage();
  }

  buildings() {
    let temp = 0;
    POWERPLANTS.forEach((powerPlant) => {
      temp += powerPlant.buildings;
    });
    return temp;
  }

  productionPerS() {
    let tempProduction = 0;
    if (!this.event) {
      this.powerPlants.forEach((powerPlant) => {
        tempProduction += powerPlant.production();
      });
    } else {
      this.powerPlants.forEach((powerPlant) => {
        tempProduction += powerPlant.production(this.event);
      });
    }
    this.productionS = tempProduction * 10;
    return this.productionS;
  }

  offlineProduction() {
    const timeDiff = Number((Date.now() - resources.timeOffline) / 10000);
    resources.energy += this.productionPerS() * timeDiff;
  }
}
