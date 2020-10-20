import { TestBed, inject } from '@angular/core/testing';

import { PlanService } from './plan.service';

describe('PlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanService]
    });
  });

  it('should be created', inject([PlanService], (service: PlanService) => {
    expect(service).toBeTruthy();
  }));
});
