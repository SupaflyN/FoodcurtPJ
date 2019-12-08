import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food10Component } from './food10.component';

describe('Food10Component', () => {
  let component: Food10Component;
  let fixture: ComponentFixture<Food10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
