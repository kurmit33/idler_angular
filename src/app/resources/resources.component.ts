import { Component, OnInit, HostListener } from '@angular/core';
import { resources } from '../resources';
import { timer } from 'rxjs';
import { POWERPLANTS } from '../powerPlantList';
import { ProductionEvent } from '../productionEvent';
import { PRODUCTIONEVENTS } from '../productionEventsList';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  multi = 1;
  resources = resources;
  powerPlants = POWERPLANTS;
  productionEvents = PRODUCTIONEVENTS;
  event: ProductionEvent;
  constructor() { }

  ngOnInit() {
    if (localStorage.length > 0) {
      resources.getStorage();
      POWERPLANTS.forEach((powerPlant) => {
        powerPlant.getStorage();
      });
    }
    const productionTimer = timer(100, 100);
    const priceTimer = timer(100, 60000);
    const eventTimer = timer(100, 120000);
    productionTimer.subscribe(val => this.production());
    priceTimer.subscribe(val => resources.changePrice());
    eventTimer.subscribe(val => resources.changeEvent(resources.randomus(0, 150, 1)));
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    resources.updateStorage();
    POWERPLANTS.forEach((powerPlant) => {
      powerPlant.updateStorage();
    });
  }

  onSelect(value: number) {
    resources.multiplier = value;
    this.multi = value;
  }

  production() {
    let tempProduction = 0;
    if (!this.event) {
      POWERPLANTS.forEach((powerPlant) => {
        tempProduction += powerPlant.production();
      });
    } else {
      POWERPLANTS.forEach((powerPlant) => {
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
    resources.multiplier = 1;
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
    let temp = 0;
    POWERPLANTS.forEach((powerPlant) => {
      temp += powerPlant.production();
    });
    return temp * 10;
  }
}
