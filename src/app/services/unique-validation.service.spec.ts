import { TestBed } from '@angular/core/testing';

import { UniqueValidationService } from './unique-validation.service';

describe('UniqueValidationService', () => {
  let service: UniqueValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
