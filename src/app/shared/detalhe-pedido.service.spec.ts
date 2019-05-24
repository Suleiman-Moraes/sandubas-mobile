import { TestBed } from '@angular/core/testing';

import { DetalhePedidoService } from './detalhe-pedido.service';

describe('DetalhePedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalhePedidoService = TestBed.get(DetalhePedidoService);
    expect(service).toBeTruthy();
  });
});
