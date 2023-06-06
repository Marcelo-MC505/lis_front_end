import { TestBed } from '@angular/core/testing';

import { UsuarioimprimeService } from './usuarioimprime.service';

describe('UsuarioimprimeService', () => {
  let service: UsuarioimprimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioimprimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
