import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlantListComponent } from './power-plant-list.component';

describe('PowerPlantListComponent', () => {
  let component: PowerPlantListComponent;
  let fixture: ComponentFixture<PowerPlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
