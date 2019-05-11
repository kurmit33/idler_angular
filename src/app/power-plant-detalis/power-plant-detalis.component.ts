import { Component, OnInit, Input } from '@angular/core';
import { PowerPlant } from '../powerPlant';
import { PowerPlantListComponent } from '../power-plant-list/power-plant-list.component';

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

}
