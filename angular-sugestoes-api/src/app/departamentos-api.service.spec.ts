import { TestBed } from '@angular/core/testing';

import { DepartamentosApiService } from './departamentos-api.service';

describe('DepartamentosApiService', () => {
  let service: DepartamentosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
