import { TestBed, inject } from '@angular/core/testing';

import { DicegameService } from './dicegame.service';

describe('DicegameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DicegameService]
    });
  });

  it('should be created', inject([DicegameService], (service: DicegameService) => {
    expect(service).toBeTruthy();
  }));
});
