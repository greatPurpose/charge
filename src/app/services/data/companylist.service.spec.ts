import { TestBed, inject } from '@angular/core/testing';

import { CompanyListService } from './companylist.service';

describe('CompanyList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyListService]
    });
  });

  it('should be created', inject([CompanyListService], (service: CompanyListService) => {
    expect(service).toBeTruthy();
  }));
});
