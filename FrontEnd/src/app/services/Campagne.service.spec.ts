/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampagneService } from './Campagne.service';

describe('Service: Campagne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampagneService]
    });
  });

  it('should ...', inject([CampagneService], (service: CampagneService) => {
    expect(service).toBeTruthy();
  }));
});
