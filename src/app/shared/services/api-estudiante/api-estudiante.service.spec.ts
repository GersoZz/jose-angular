import { TestBed } from '@angular/core/testing';

import { ApiEstudianteService } from './api-estudiante.service';

describe('ApiEstudianteService', () => {
  let service: ApiEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
