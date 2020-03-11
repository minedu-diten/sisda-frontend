import { TestBed } from '@angular/core/testing';

import { RestangularService } from './restangular.service';

describe('RestangularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestangularService = TestBed.get(RestangularService);
    expect(service).toBeTruthy();
  });
});
