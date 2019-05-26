import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PowerPlant } from '../powerPlant';
import { resources } from '../resources';

@Component({
  selector: 'app-power-plant-detalis',
  templateUrl: './power-plant-detalis.component.html',
  styleUrls: ['./power-plant-detalis.component.css']
})
export class PowerPlantDetalisComponent implements OnInit {
  @Input() powerPlant: PowerPlant;
  @Input() multi: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.multi = resources.multiplier;
  }
  ngOnInit() {
  }

  build() {
    this.powerPlant.build(this.multi);
  }

  upgrade() {
    this.powerPlant.upgrade(this.multi);
  }

  hire() {
    this.powerPlant.hire(this.multi);
  }
}
