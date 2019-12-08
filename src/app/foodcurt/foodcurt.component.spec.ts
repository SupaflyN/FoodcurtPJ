import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcurtComponent } from './foodcurt.component';

describe('FoodcurtComponent', () => {
  let component: FoodcurtComponent;
  let fixture: ComponentFixture<FoodcurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
