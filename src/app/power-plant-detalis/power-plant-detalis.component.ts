import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PowerPlant } from '../powerPlant';
import { globalFunctions } from '../global';

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
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.multi = globalFunctions.multiplier;
  }
  ngOnInit() {
  }

  build() {
  }
}
