import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PowerPlant } from '../powerPlant';

@Component({
  selector: 'app-power-plant-detalis',
  templateUrl: './power-plant-detalis.component.html',
  styleUrls: ['./power-plant-detalis.component.css']
})
export class PowerPlantDetalisComponent implements OnInit {
  @Input() powerPlant: PowerPlant;

  constructor() { }

  ngOnInit() {
  }


  build() {
  }
}
