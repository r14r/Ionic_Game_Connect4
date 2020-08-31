import { TestBed } from '@angular/core/testing';

import { MinMaxService } from './min-max.service';

describe('MinMaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinMaxService = TestBed.get(MinMaxService);
    expect(service).toBeTruthy();
  });
});
