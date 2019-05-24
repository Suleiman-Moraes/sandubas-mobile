import { Component, OnInit } from '@angular/core';
import { PedidoService } from '~/app/shared/pedido.service';
import { SharedService } from '~/app/shared/shared.service';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';
import { ResponseApi } from '~/app/shared/models/Response-api.model';
import { Pedido } from '~/app/shared/models/pedido.model';

@Component({
  selector: 'ns-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css'],
  moduleId: module.id,
})
export class SacolaComponent implements OnInit {

pedido: Pedido = new Pedido();

  constructor(
      private pedidoService: PedidoService,
      private sharedService: SharedService
  ) {

   }

  ngOnInit() {
      this.buscarMercadorias();
  }
  private buscarMercadorias(): void {
      this.pedidoService.getPedido(this.sharedService.user.id).subscribe((response:ResponseApi) =>{
          if(response != null){
              if(response.data != null){
                 this.pedido = response.data;
               }else{
                   response.erros.forEach(x => alert(x));
               }
          }else{
              alert('Ocurreu um erro inesperado tente novamente mais tarde!');
          }
      });
  }
}
