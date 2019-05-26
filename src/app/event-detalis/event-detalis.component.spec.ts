import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetalisComponent } from './event-detalis.component';

describe('EventDetalisComponent', () => {
  let component: EventDetalisComponent;
  let fixture: ComponentFixture<EventDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
