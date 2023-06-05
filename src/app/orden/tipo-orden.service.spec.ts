import { TestBed } from '@angular/core/testing';

import { TipoOrdenService } from './tipo-orden.service';

describe('TipoOrdenService', () => {
  let service: TipoOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
