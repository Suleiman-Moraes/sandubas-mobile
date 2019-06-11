import { Component, OnInit } from '@angular/core';
import { PedidoService } from '~/app/shared/pedido.service';
import { SharedService } from '~/app/shared/shared.service';
import { ResponseApi } from '~/app/shared/models/Response-api.model';
import { Pedido } from '~/app/shared/models/pedido.model';
import { DetalhePedido } from '~/app/shared/models/detalhe-pedido.model';
import * as geoLocation from "nativescript-geolocation";

@Component({
    selector: 'ns-sacola',
    templateUrl: './sacola.component.html',
    styleUrls: ['./sacola.component.css'],
    moduleId: module.id,
})
export class SacolaComponent implements OnInit {

    pedido: Pedido = new Pedido();
    currentGeoLocation: any;
    isCartao: boolean = true;

    constructor(
        private pedidoService: PedidoService,
        private sharedService: SharedService
    ) {

    }

    ngOnInit() {
        this.buscarMercadorias();
    }

    retirar(item: DetalhePedido) {
        this.removerDetalhe(item);
    }

    trocarFormaPagamento(): void{
        this.isCartao = !this.isCartao;
    }

    comprar(): void{
        this.isCartao = !this.isCartao;
    }

    enableLocationServices(): void {
        geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(() => this.showLocation());
            } else {
                this.showLocation();
            }
        });
    }

    private showLocation(): void {
        geoLocation.watchLocation(location => {
            this.currentGeoLocation = location;
            alert('Localização Capturada com sucesso!');
            // alert(this.currentGeoLocation.latitude);
            // alert(this.currentGeoLocation.longitude);
        }, error => {
            alert(error);
        }, {
                // desiredAccuracy: 3,
                // updateDistance: 10,
                // minimumUpdateTime: 1000 * 1
            });
    }

    private buscarMercadorias(): void {
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe((response: ResponseApi) => {
            if (response != null) {
                if (response.data != null) {
                    this.pedido = response.data;
                } else {
                    response.erros.forEach(x => alert(x));
                }
            } else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
    }

    private removerDetalhe(item: DetalhePedido): void {
        this.pedidoService.removerDetalhe(this.sharedService.user.id, item.id).subscribe((response: ResponseApi) => {
            if (response != null) {
                if (response.data != null) {
                    this.pedido = response.data;
                    alert(`Pedido "${item.quantidade} x  ${item.mercadoria.descricao} R$ ${item.total}" Removido com Sucesso!`);
                } else {
                    response.erros.forEach(x => alert(x));
                }
            } else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
    }
}
