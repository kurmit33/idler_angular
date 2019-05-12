import { Component, OnInit } from '@angular/core';
import { resources } from '../resources';
import { globalFunctions } from '../global';
import { timer } from 'rxjs';



@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources = resources;
  constructor() { }

  ngOnInit() {
    const source = timer(100, 60000);
    source.subscribe(val => resources.changePrice());
  }

  onSelect(value: number) {
    globalFunctions.multiplier = value;
  }
}
