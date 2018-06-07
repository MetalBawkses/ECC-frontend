import { TestBed, inject } from '@angular/core/testing';

import { TestFormServiceService } from './test-form-service.service';

describe('TestFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestFormServiceService]
    });
  });

  it('should be created', inject([TestFormServiceService], (service: TestFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
