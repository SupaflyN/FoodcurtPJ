import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food3Component } from './food3.component';

describe('Food3Component', () => {
  let component: Food3Component;
  let fixture: ComponentFixture<Food3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
