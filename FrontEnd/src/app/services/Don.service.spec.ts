/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DonService } from './Don.service';

describe('Service: Don', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonService]
    });
  });

  it('should ...', inject([DonService], (service: DonService) => {
    expect(service).toBeTruthy();
  }));
});
