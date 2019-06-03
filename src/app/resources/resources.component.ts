import { Component, OnInit, HostListener, ViewChild, ElementRef, SimpleChanges, Input } from '@angular/core';
import { resources } from '../resources';
import { timer, Observable } from 'rxjs';
import { POWERPLANTS } from '../powerPlantList';
import { ProductionEvent } from '../productionEvent';
import { PRODUCTIONEVENTS } from '../productionEventsList';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Store, select } from '@ngrx/store';
import { Reset, Zero } from '../sell.actions';
import { accu } from '../acumulators';
import { office } from '../office';
import { group } from '@angular/animations';
import { controlRoom } from '../controlRoom';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  hardFlag = false;
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
  sell$: Observable<number>;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @HostListener('window:resize') onresize() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      this.toolbar();
    }
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
  }
  constructor(public breakpointObserver: BreakpointObserver, private store: Store<{ sell: number }>) {
    this.sell$ = store.pipe(select('sell'));
  }

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
    productionTimer.subscribe(val => {
      if (resources.energy + this.production() <= accu.maxEnergy()) {
        resources.energy += this.production();
      } else {
        resources.energy = accu.maxEnergy();
      }
      if (this.priceTime >= 600) {
        resources.changePrice();
        this.priceTime = 0;
      } else {
        this.priceTime++;
      }
      if (resources.eventTime - resources.eventWork <= 0) {
        this.event = resources.changeEvent(resources.randomus(0, 150, 1));
        resources.eventWork = 0;
      } else {
        resources.eventWork++;
      }
      this.productionS = this.production() * 10;
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    if (!this.hardFlag) {
      resources.updateStorage();
      accu.updateStorage();
      office.updateStorage();
      controlRoom.updateStorage();
      POWERPLANTS.forEach((powerPlant) => {
        powerPlant.updateStorage();
      });
    }
  }

  toolbar() {
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
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
    this.powerPlants.forEach((powerPlant) => {
      tempProduction += powerPlant.production(resources.event);
    });
    return tempProduction;
  }

  sellEnergy() {
    resources.sellResources(false);
    this.store.dispatch(new Reset());
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
    temp += accu.buildings;
    temp += office.buildings;
    tempEng += controlRoom.engineers;
    resources.money = 5;
    resources.energy = 0;
    resources.greenCertyfiaction = 0;
    resources.multiplier = 1;
    resources.workers += Math.floor(Math.floor(temp / 2000) + Math.floor(tempEng * 0.5));
    accu.buildings = 0;
    accu.level = 0;
    office.buildings = 0;
    office.level = 0;
    controlRoom.level = 0;
    controlRoom.engineers = 0;
    resources.updateStorage();
    controlRoom.updateStorage();
    accu.updateStorage();
    office.updateStorage();
    this.store.dispatch(new Zero());
  }

  buildings() {
    let temp = 0;
    POWERPLANTS.forEach((powerPlant) => {
      temp += powerPlant.buildings;
    });
    return temp;
  }

  offlineProduction() {
    const timeDiff = Number((Date.now() - resources.timeOffline));
    if (timeDiff > controlRoom.timeOffilne()) {
      resources.energy += this.production() * (controlRoom.timeOffilne() / 100) * controlRoom.multiplierOffline();
    } else {
      resources.energy += this.production() * (timeDiff / 100) * controlRoom.multiplierOffline();
    }
  }

  hardReset() {
    this.hardFlag = true;
    localStorage.clear();
    window.location.reload();
  }
}
