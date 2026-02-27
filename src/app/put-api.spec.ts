import { TestBed } from '@angular/core/testing';

import { PutApi } from './put-api';

describe('PutApi', () => {
  let service: PutApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
