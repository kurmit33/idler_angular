import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlantDetalisComponent } from './power-plant-detalis.component';

describe('PowerPlantDetalisComponent', () => {
  let component: PowerPlantDetalisComponent;
  let fixture: ComponentFixture<PowerPlantDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPlantDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPlantDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
