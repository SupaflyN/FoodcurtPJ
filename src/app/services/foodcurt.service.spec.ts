import { TestBed } from '@angular/core/testing';

import { FoodcurtService } from './foodcurt.service';

describe('FoodcurtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodcurtService = TestBed.get(FoodcurtService);
    expect(service).toBeTruthy();
  });
});
