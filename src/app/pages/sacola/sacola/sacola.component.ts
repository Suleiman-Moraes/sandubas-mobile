import { Component, OnInit } from '@angular/core';
import { PedidoService } from '~/app/shared/pedido.service';
import { SharedService } from '~/app/shared/shared.service';
import { ResponseApi } from '~/app/shared/models/Response-api.model';
import { Pedido } from '~/app/shared/models/pedido.model';
import { DetalhePedido } from '~/app/shared/models/detalhe-pedido.model';
import * as geoLocation from "nativescript-geolocation";
import { RouterExtensions } from 'nativescript-angular/router';

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
        private sharedService: SharedService,
        private routerExtensions: RouterExtensions
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
        this.pedido.tipoPagamento = this.isCartao ? 'Cartão' : 'Dinheiro';
    }

    comprar(): void{
        this.pedidoService.comprar(this.pedido).subscribe((response: ResponseApi) => {
            if (response != null) {
                if (response.data != null) {
                    this.pedido = response.data;
                    alert('Compra efetuada com sucesso!');
                    this.routerExtensions.back();
                } else {
                    response.erros.forEach(x => alert(x));
                }
            } else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
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
            this.pedido.lat = this.currentGeoLocation.latitude;
            this.pedido.log = this.currentGeoLocation.longitude;
            // alert(this.currentGeoLocation.latitude);
            // alert(this.currentGeoLocation.longitude);
        }, error => {
            alert(error);
        }, {
                desiredAccuracy: 3,
                updateDistance: 10,
                minimumUpdateTime: 10000000000 * 1
            });
    }

    private buscarMercadorias(): void {
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe((response: ResponseApi) => {
            if (response != null) {
                if (response.data != null) {
                    this.pedido = response.data;
                    this.pedido.tipoPagamento = this.isCartao ? 'Cartão' : 'Dinheiro';
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
                    this.pedido.tipoPagamento = this.isCartao ? 'Cartão' : 'Dinheiro';
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
