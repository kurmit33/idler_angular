import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoDetalisComponent } from './dynamo-detalis.component';

describe('DynamoDetalisComponent', () => {
  let component: DynamoDetalisComponent;
  let fixture: ComponentFixture<DynamoDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamoDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
