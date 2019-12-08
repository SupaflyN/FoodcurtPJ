import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food9Component } from './food9.component';

describe('Food9Component', () => {
  let component: Food9Component;
  let fixture: ComponentFixture<Food9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
