import { TestBed } from '@angular/core/testing';

import { EstadoAulasService } from './estado-aulas.service';

describe('EstadoAulasService', () => {
  let service: EstadoAulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoAulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
