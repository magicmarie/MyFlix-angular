import { TestBed } from '@angular/core/testing';

import { FetchApiDataService } from './fetch-api-data.service';

describe('FetchApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchApiDataService = TestBed.get(FetchApiDataService);
    expect(service).toBeTruthy();
  });
});
