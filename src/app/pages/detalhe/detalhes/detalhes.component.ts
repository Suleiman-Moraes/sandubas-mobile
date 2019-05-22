import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { switchMap } from 'rxjs/operators';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';
import { MercadoriaService } from '~/app/shared/mercadoria.service';
import { ResponseApi } from '~/app/shared/models/Response-api.model';
import { DetalhePedido } from '~/app/shared/models/detalhe-pedido.model';
import { DetalhePedidoService } from '~/app/shared/detalhe-pedido.service';
import { Pedido } from '~/app/shared/models/pedido.model';
import { PedidoService } from '~/app/shared/pedido.service';
import { SharedService } from '~/app/shared/shared.service';


@Component({
    selector: 'ns-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css'],
    moduleId: module.id,
})
export class DetalhesComponent implements OnInit {

    itemId: number;
    item: Mercadoria;
    detalhePedido: DetalhePedido;
    pedido: Pedido;
    qtd: number = 0;
    valorUn: number = 0;
    valorTotal: number = 0;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private mercadoriaService: MercadoriaService,
        private detalhePedidoService: DetalhePedidoService,
        private pedidoService: PedidoService,
        private sharedService: SharedService
    ){
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];
            this.loadReasource(this.itemId);
        });
    }

    ngOnInit(): void{}

    plus(): void{
        if(this.qtd < 20){
            this.qtd += 1;
            this.valorTotal += this.valorUn;
            this.verificarValorTotal();
        }

    }

    minus():void{
        if(this.qtd > 0){
            this.qtd -= 1;
            this.valorTotal -= this.valorUn;
            this.verificarValorTotal();
        }
    }
    adicionar():void{
        this.buscarPedido();
    }

    toggleLike(): void{}

    toggleHeart(item): void{}

    categoryIcon(): void{}

    onCloseTap(): void{
        this.routerExtensions.back();
    }

    private loadReasource(id:number){
        this.mercadoriaService.findById(id).subscribe((response: ResponseApi)=>{
            if(response != null){
                if(response.data != null){
                    this.item = response.data;
                    this.valorUn = (this.item.precoPago*(this.item.porcentagemVenda/100.0+1));
                }else{
                    response.erros.forEach(x => alert(x));
                }
            }else{
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    }
    private adicionarPedido():void{

        this.pedidoService.adicionar(this.pedido).subscribe((response: ResponseApi)=>{
            if(response != null){
                if(response.data != null){
                    alert('Pedido adicionado com sucesso!!!');
                    this.onCloseTap();
                }else{
                    alert("ERRO ao adicionar pedido");
                    response.erros.forEach(x => alert(x));
                }
            }else{
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    }
    private verificarValorTotal(): void{
        if(this.valorTotal < 0){
            this.valorTotal = 0;
        }
    }
    private adicionarDetalhePedido() : void{

        this.detalhePedido = new DetalhePedido();
        this.detalhePedido.mercadoria = this.item;
        this.detalhePedido.quantidade = this.qtd;
        this.detalhePedido.total = this.valorTotal;
        this.detalhePedido.precoUnitario = this.valorUn;
        if(this.pedido.detalhesPedidos == null || this.pedido.detalhesPedidos.length <= 0){
            this.pedido.detalhesPedidos = new Array();
        }
        this.pedido.detalhesPedidos.push(this.detalhePedido);
        alert('teste oi 127');
        this.adicionarPedido();


    }
    private buscarPedido() : void {
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe((response: ResponseApi)=>{
            if(response != null){
                if(response.data != null){
                    this.pedido = response.data;
                    this.adicionarDetalhePedido();
                }else{
                    response.erros.forEach(x => alert(x));
                }
            }else{
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    }
}
