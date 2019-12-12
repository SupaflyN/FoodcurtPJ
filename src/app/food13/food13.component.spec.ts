import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food13Component } from './food13.component';

describe('Food13Component', () => {
  let component: Food13Component;
  let fixture: ComponentFixture<Food13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
