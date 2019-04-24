import { TestBed } from '@angular/core/testing';

import { MercadoriaService } from './mercadoria.service';

describe('MercadoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadoriaService = TestBed.get(MercadoriaService);
    expect(service).toBeTruthy();
  });
});
