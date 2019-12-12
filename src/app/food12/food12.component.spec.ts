import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food12Component } from './food12.component';

describe('Food12Component', () => {
  let component: Food12Component;
  let fixture: ComponentFixture<Food12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
