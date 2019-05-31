import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDetalisComponent } from './office-detalis.component';

describe('OfficeDetalisComponent', () => {
  let component: OfficeDetalisComponent;
  let fixture: ComponentFixture<OfficeDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
