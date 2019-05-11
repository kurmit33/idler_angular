import { Component, OnInit } from '@angular/core';
import { POWERPLANTS } from '../powerPlantList';

@Component({
  selector: 'app-power-plant-list',
  templateUrl: './power-plant-list.component.html',
  styleUrls: ['./power-plant-list.component.css']
})
export class PowerPlantListComponent implements OnInit {
  powerPlants = POWERPLANTS;
  clickedID = -1;
  constructor() { }

  ngOnInit() {
  }

  onSelect(id: number) {
    if (this.clickedID === id) { this.clickedID = -1; } else { this.clickedID = id; }
  }
}
