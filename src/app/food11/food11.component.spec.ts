import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food11Component } from './food11.component';

describe('Food11Component', () => {
  let component: Food11Component;
  let fixture: ComponentFixture<Food11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
