import { Component, OnInit } from '@angular/core';
import { resources } from '../resources';
import { globalFunctions } from '../global';
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
  resources = resources;
  powerPlants = POWERPLANTS;
  productionEvents = PRODUCTIONEVENTS;
  event: ProductionEvent;
  constructor() { }

  ngOnInit() {
    const productionTimer = timer(100, 100);
    const priceTimer = timer(100, 60000);
    const eventTimer = timer(100, 180000);
    productionTimer.subscribe(val => this.production());
    priceTimer.subscribe(val => resources.changePrice());
    eventTimer.subscribe(val => this.changeEvent(globalFunctions.randomus(0, 150, 1)));

  }

  onSelect(value: number) {
    globalFunctions.multiplier = value;
  }

  changeEvent(num: number) {
    PRODUCTIONEVENTS.forEach((productionEvent) => {
      productionEvent.isOn(num);
    });
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
      resources.setResources('money', tempProduction);
  }
}
