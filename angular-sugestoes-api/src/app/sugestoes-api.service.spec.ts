import { TestBed } from '@angular/core/testing';

import { SugestoesApiService } from './sugestoes-api.service';

describe('SugestoesApiService', () => {
  let service: SugestoesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugestoesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
