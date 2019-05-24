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
        return new Promise(function (resolve, reject) {
            _this.detalhePedidoService.adicionar(_this.detalhePedido, _this.sharedService.user.id).subscribe(function (response) {
                if (response != null) {
                    if (response.data != null) {
                        alert('Pedido adicionado com sucesso!!!');
                        resolve();
                        _this.onCloseTap();
                    }
                    else {
                        alert("ERRO ao adicionar pedido");
                        response.erros.forEach(function (x) { return alert(x); });
                        reject();
                    }
                }
                else {
                    alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
                    reject();
                }
            });
        });
    };
    DetalhesComponent.prototype.verificarValorTotal = function () {
        if (this.valorTotal < 0) {
            this.valorTotal = 0;
        }
    };
    DetalhesComponent.prototype.adicionarDetalhePedido = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.detalhePedido = new detalhe_pedido_model_1.DetalhePedido();
            _this.detalhePedido.mercadoria = _this.item;
            _this.detalhePedido.quantidade = _this.qtd;
            _this.detalhePedido.total = _this.valorTotal;
            _this.detalhePedido.precoUnitario = _this.valorUn;
            _this.adicionarPedido();
            resolve();
        });
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBUzNDO0lBS0UsMkJBQ1UsU0FBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVU7UUFIcEIsaUJBWUM7UUFYUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUVsQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoQyxxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNuRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBcEJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPcUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtPQVJULGlCQUFpQixDQXNCN0I7SUFBRCx3QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVyY2Fkb3JpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvbWVyY2Fkb3JpYS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLWRldGFsaGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGV0YWxoZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RldGFsaGVzLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWxoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBpdGVtSWQ6IG51bWJlcjtcclxuICBpdGVtOiBNZXJjYWRvcmlhO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcclxuICApe1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcclxuICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQUVwRSxpRkFBeUU7QUFDekUsOEVBQTJFO0FBRTNFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFTNUQ7SUFVSSwyQkFDWSxTQUFvQixFQUNwQixnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsYUFBNEIsRUFDNUIsYUFBNEI7UUFQeEMsaUJBZ0JDO1FBZlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFXbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FB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Q2pDO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFNO2dCQUNILEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2FBQ3RFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUhRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FZeUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtZQUNTLHNDQUFpQjtZQUNkLDZDQUFvQjtZQUMzQiw4QkFBYTtZQUNiLDhCQUFhO09BakIvQixpQkFBaUIsQ0E2SDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdIRCxJQTZIQztBQTdIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1lcmNhZG9yaWEgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL21lcmNhZG9yaWEubW9kZWwnO1xyXG5pbXBvcnQgeyBNZXJjYWRvcmlhU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tZXJjYWRvcmlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgRGV0YWxoZVBlZGlkbyB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvZGV0YWxoZS1wZWRpZG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBEZXRhbGhlUGVkaWRvU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9kZXRhbGhlLXBlZGlkby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9wZWRpZG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3BlZGlkby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWRldGFsaGVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXRhbGhlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhbGhlcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWxoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGl0ZW1JZDogbnVtYmVyO1xyXG4gICAgaXRlbTogTWVyY2Fkb3JpYTtcclxuICAgIGRldGFsaGVQZWRpZG86IERldGFsaGVQZWRpZG87XHJcbiAgICBwZWRpZG86IFBlZGlkbztcclxuICAgIHF0ZDogbnVtYmVyID0gMDtcclxuICAgIHZhbG9yVW46IG51bWJlciA9IDA7XHJcbiAgICB2YWxvclRvdGFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIG1lcmNhZG9yaWFTZXJ2aWNlOiBNZXJjYWRvcmlhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRldGFsaGVQZWRpZG9TZXJ2aWNlOiBEZXRhbGhlUGVkaWRvU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBlZGlkb1NlcnZpY2U6IFBlZGlkb1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZWFzb3VyY2UodGhpcy5pdGVtSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgcGx1cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5xdGQgPCAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLnF0ZCArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnZhbG9yVG90YWwgKz0gdGhpcy52YWxvclVuO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhclZhbG9yVG90YWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnF0ZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5xdGQgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy52YWxvclRvdGFsIC09IHRoaXMudmFsb3JVbjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXJWYWxvclRvdGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRpY2lvbmFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnVzY2FyUGVkaWRvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGlrZSgpOiB2b2lkIHsgfVxyXG5cclxuICAgIHRvZ2dsZUhlYXJ0KGl0ZW0pOiB2b2lkIHsgfVxyXG5cclxuICAgIGNhdGVnb3J5SWNvbigpOiB2b2lkIHsgfVxyXG5cclxuICAgIG9uQ2xvc2VUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRSZWFzb3VyY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubWVyY2Fkb3JpYVNlcnZpY2UuZmluZEJ5SWQoaWQpLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbG9yVW4gPSAodGhpcy5pdGVtLnByZWNvUGFnbyAqICh0aGlzLml0ZW0ucG9yY2VudGFnZW1WZW5kYSAvIDEwMC4wICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkaWNpb25hclBlZGlkbygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFsaGVQZWRpZG9TZXJ2aWNlLmFkaWNpb25hcih0aGlzLmRldGFsaGVQZWRpZG8sIHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQZWRpZG8gYWRpY2lvbmFkbyBjb20gc3VjZXNzbyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZVRhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRVJSTyBhbyBhZGljaW9uYXIgcGVkaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gaW5lc3BlcmFkbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHZlcmlmaWNhclZhbG9yVG90YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsb3JUb3RhbCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy52YWxvclRvdGFsID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkaWNpb25hckRldGFsaGVQZWRpZG8oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvID0gbmV3IERldGFsaGVQZWRpZG8oKTtcclxuICAgICAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvLm1lcmNhZG9yaWEgPSB0aGlzLml0ZW07XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5xdWFudGlkYWRlID0gdGhpcy5xdGQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby50b3RhbCA9IHRoaXMudmFsb3JUb3RhbDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvLnByZWNvVW5pdGFyaW8gPSB0aGlzLnZhbG9yVW47XHJcbiAgICAgICAgICAgIHRoaXMuYWRpY2lvbmFyUGVkaWRvKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1c2NhclBlZGlkbygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBlZGlkb1NlcnZpY2UuZ2V0UGVkaWRvKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkaWNpb25hckRldGFsaGVQZWRpZG8oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gaW5lc3BlcmFkbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhISEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
>>>>>>> desenvolvimento
