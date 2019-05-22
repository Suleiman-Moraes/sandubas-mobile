"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var operators_1 = require("rxjs/operators");
var mercadoria_service_1 = require("~/app/shared/mercadoria.service");
var detalhe_pedido_model_1 = require("~/app/shared/models/detalhe-pedido.model");
var detalhe_pedido_service_1 = require("~/app/shared/detalhe-pedido.service");
var pedido_service_1 = require("~/app/shared/pedido.service");
var shared_service_1 = require("~/app/shared/shared.service");
var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(pageRoute, routerExtensions, page, mercadoriaService, detalhePedidoService, pedidoService, sharedService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.mercadoriaService = mercadoriaService;
        this.detalhePedidoService = detalhePedidoService;
        this.pedidoService = pedidoService;
        this.sharedService = sharedService;
        this.qtd = 0;
        this.valorUn = 0;
        this.valorTotal = 0;
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.loadReasource(_this.itemId);
        });
    }
    DetalhesComponent.prototype.ngOnInit = function () { };
    DetalhesComponent.prototype.plus = function () {
        if (this.qtd < 20) {
            this.qtd += 1;
            this.valorTotal += this.valorUn;
            this.verificarValorTotal();
        }
    };
    DetalhesComponent.prototype.minus = function () {
        if (this.qtd > 0) {
            this.qtd -= 1;
            this.valorTotal -= this.valorUn;
            this.verificarValorTotal();
        }
    };
    DetalhesComponent.prototype.adicionar = function () {
        this.buscarPedido();
    };
    DetalhesComponent.prototype.toggleLike = function () { };
    DetalhesComponent.prototype.toggleHeart = function (item) { };
    DetalhesComponent.prototype.categoryIcon = function () { };
    DetalhesComponent.prototype.onCloseTap = function () {
        this.routerExtensions.back();
    };
    DetalhesComponent.prototype.loadReasource = function (id) {
        var _this = this;
        this.mercadoriaService.findById(id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.item = response.data;
                    _this.valorUn = (_this.item.precoPago * (_this.item.porcentagemVenda / 100.0 + 1));
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    };
    DetalhesComponent.prototype.adicionarPedido = function () {
        var _this = this;
        this.pedidoService.adicionar(this.pedido).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    alert('Pedido adicionado com sucesso!!!');
                    _this.onCloseTap();
                }
                else {
                    alert("ERRO ao adicionar pedido");
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    };
    DetalhesComponent.prototype.verificarValorTotal = function () {
        if (this.valorTotal < 0) {
            this.valorTotal = 0;
        }
    };
    DetalhesComponent.prototype.adicionarDetalhePedido = function () {
        this.detalhePedido = new detalhe_pedido_model_1.DetalhePedido();
        this.detalhePedido.mercadoria = this.item;
        this.detalhePedido.quantidade = this.qtd;
        this.detalhePedido.total = this.valorTotal;
        this.detalhePedido.precoUnitario = this.valorUn;
        if (this.pedido.detalhesPedidos == null || this.pedido.detalhesPedidos.length <= 0) {
            this.pedido.detalhesPedidos = new Array();
        }
        this.pedido.detalhesPedidos.push(this.detalhePedido);
        alert('teste oi 127');
        this.adicionarPedido();
    };
    DetalhesComponent.prototype.buscarPedido = function () {
        var _this = this;
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.pedido = response.data;
                    _this.adicionarDetalhePedido();
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    };
    DetalhesComponent = __decorate([
        core_1.Component({
            selector: 'ns-detalhes',
            templateUrl: './detalhes.component.html',
            styleUrls: ['./detalhes.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            router_1.RouterExtensions,
            page_1.Page,
            mercadoria_service_1.MercadoriaService,
            detalhe_pedido_service_1.DetalhePedidoService,
            pedido_service_1.PedidoService,
            shared_service_1.SharedService])
    ], DetalhesComponent);
    return DetalhesComponent;
}());
exports.DetalhesComponent = DetalhesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQUVwRSxpRkFBeUU7QUFDekUsOEVBQTJFO0FBRTNFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFTNUQ7SUFVSSwyQkFDWSxTQUFvQixFQUNwQixnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsYUFBNEIsRUFDNUIsYUFBNEI7UUFQeEMsaUJBZ0JDO1FBZlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFXbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FB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O29CQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFJO2dCQUNELEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2FBQ3RFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUhRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FZeUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtZQUNTLHNDQUFpQjtZQUNkLDZDQUFvQjtZQUMzQiw4QkFBYTtZQUNiLDhCQUFhO09BakIvQixpQkFBaUIsQ0E2SDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdIRCxJQTZIQztBQTdIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9tZXJjYWRvcmlhLm1vZGVsJztcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL2RldGFsaGUtcGVkaWRvLm1vZGVsJztcbmltcG9ydCB7IERldGFsaGVQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2RldGFsaGUtcGVkaWRvLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9wZWRpZG8ubW9kZWwnO1xuaW1wb3J0IHsgUGVkaWRvU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9wZWRpZG8uc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWRldGFsaGVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV0YWxoZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RldGFsaGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEZXRhbGhlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpdGVtSWQ6IG51bWJlcjtcbiAgICBpdGVtOiBNZXJjYWRvcmlhO1xuICAgIGRldGFsaGVQZWRpZG86IERldGFsaGVQZWRpZG87XG4gICAgcGVkaWRvOiBQZWRpZG87XG4gICAgcXRkOiBudW1iZXIgPSAwO1xuICAgIHZhbG9yVW46IG51bWJlciA9IDA7XG4gICAgdmFsb3JUb3RhbDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBtZXJjYWRvcmlhU2VydmljZTogTWVyY2Fkb3JpYVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGV0YWxoZVBlZGlkb1NlcnZpY2U6IERldGFsaGVQZWRpZG9TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBlZGlkb1NlcnZpY2U6IFBlZGlkb1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2FkUmVhc291cmNlKHRoaXMuaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZHt9XG5cbiAgICBwbHVzKCk6IHZvaWR7XG4gICAgICAgIGlmKHRoaXMucXRkIDwgMjApe1xuICAgICAgICAgICAgdGhpcy5xdGQgKz0gMTtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCArPSB0aGlzLnZhbG9yVW47XG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhclZhbG9yVG90YWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbWludXMoKTp2b2lke1xuICAgICAgICBpZih0aGlzLnF0ZCA+IDApe1xuICAgICAgICAgICAgdGhpcy5xdGQgLT0gMTtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCAtPSB0aGlzLnZhbG9yVW47XG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhclZhbG9yVG90YWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGljaW9uYXIoKTp2b2lke1xuICAgICAgICB0aGlzLmJ1c2NhclBlZGlkbygpO1xuICAgIH1cblxuICAgIHRvZ2dsZUxpa2UoKTogdm9pZHt9XG5cbiAgICB0b2dnbGVIZWFydChpdGVtKTogdm9pZHt9XG5cbiAgICBjYXRlZ29yeUljb24oKTogdm9pZHt9XG5cbiAgICBvbkNsb3NlVGFwKCk6IHZvaWR7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUmVhc291cmNlKGlkOm51bWJlcil7XG4gICAgICAgIHRoaXMubWVyY2Fkb3JpYVNlcnZpY2UuZmluZEJ5SWQoaWQpLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKT0+e1xuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxvclVuID0gKHRoaXMuaXRlbS5wcmVjb1BhZ28qKHRoaXMuaXRlbS5wb3JjZW50YWdlbVZlbmRhLzEwMC4wKzEpKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnT2NvcnJldSB1bSBlcnJvIGluZXNwZXJhZG8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlISEhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGFkaWNpb25hclBlZGlkbygpOnZvaWR7XG5cbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLmFkaWNpb25hcih0aGlzLnBlZGlkbykuc3Vic2NyaWJlKChyZXNwb25zZTogUmVzcG9uc2VBcGkpPT57XG4gICAgICAgICAgICBpZihyZXNwb25zZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGVkaWRvIGFkaWNpb25hZG8gY29tIHN1Y2Vzc28hISEnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlVGFwKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRVJSTyBhbyBhZGljaW9uYXIgcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gaW5lc3BlcmFkbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhISEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgdmVyaWZpY2FyVmFsb3JUb3RhbCgpOiB2b2lke1xuICAgICAgICBpZih0aGlzLnZhbG9yVG90YWwgPCAwKXtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGljaW9uYXJEZXRhbGhlUGVkaWRvKCkgOiB2b2lke1xuXG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkbyA9IG5ldyBEZXRhbGhlUGVkaWRvKCk7XG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5tZXJjYWRvcmlhID0gdGhpcy5pdGVtO1xuICAgICAgICB0aGlzLmRldGFsaGVQZWRpZG8ucXVhbnRpZGFkZSA9IHRoaXMucXRkO1xuICAgICAgICB0aGlzLmRldGFsaGVQZWRpZG8udG90YWwgPSB0aGlzLnZhbG9yVG90YWw7XG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5wcmVjb1VuaXRhcmlvID0gdGhpcy52YWxvclVuO1xuICAgICAgICBpZih0aGlzLnBlZGlkby5kZXRhbGhlc1BlZGlkb3MgPT0gbnVsbCB8fCB0aGlzLnBlZGlkby5kZXRhbGhlc1BlZGlkb3MubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgdGhpcy5wZWRpZG8uZGV0YWxoZXNQZWRpZG9zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZWRpZG8uZGV0YWxoZXNQZWRpZG9zLnB1c2godGhpcy5kZXRhbGhlUGVkaWRvKTtcbiAgICAgICAgYWxlcnQoJ3Rlc3RlIG9pIDEyNycpO1xuICAgICAgICB0aGlzLmFkaWNpb25hclBlZGlkbygpO1xuXG5cbiAgICB9XG4gICAgcHJpdmF0ZSBidXNjYXJQZWRpZG8oKSA6IHZvaWQge1xuICAgICAgICB0aGlzLnBlZGlkb1NlcnZpY2UuZ2V0UGVkaWRvKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSk9PntcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGljaW9uYXJEZXRhbGhlUGVkaWRvKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=