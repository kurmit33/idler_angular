import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatorDetalisComponent } from './accumulator-detalis.component';

describe('AccumulatorDetalisComponent', () => {
  let component: AccumulatorDetalisComponent;
  let fixture: ComponentFixture<AccumulatorDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumulatorDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulatorDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
