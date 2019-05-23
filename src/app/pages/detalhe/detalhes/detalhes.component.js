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
            _this.pedidoService.adicionar(_this.pedido).subscribe(function (response) {
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
            if (_this.pedido.detalhesPedidos == null || _this.pedido.detalhesPedidos.length <= 0) {
                _this.pedido.detalhesPedidos = new Array();
            }
            _this.pedido.detalhesPedidos.push(_this.detalhePedido);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQUVwRSxpRkFBeUU7QUFDekUsOEVBQTJFO0FBRTNFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFTNUQ7SUFVSSwyQkFDWSxTQUFvQixFQUNwQixnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsYUFBNEIsRUFDNUIsYUFBNEI7UUFQeEMsaUJBZ0JDO1FBZlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFXbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FB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QXFCO1lBQ3JGLElBQUcsUUFBUSxJQUFJLElBQUksRUFBQztnQkFDaEIsSUFBRyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztvQkFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUM1QixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDakM7cUJBQUk7b0JBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0o7aUJBQUk7Z0JBQ0QsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7YUFDdEU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvSFEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVl5QixrQkFBUztZQUNGLHlCQUFnQjtZQUM1QixXQUFJO1lBQ1Msc0NBQWlCO1lBQ2QsNkNBQW9CO1lBQzNCLDhCQUFhO1lBQ2IsOEJBQWE7T0FqQi9CLGlCQUFpQixDQWdJN0I7SUFBRCx3QkFBQztDQUFBLEFBaElELElBZ0lDO0FBaElZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVyY2Fkb3JpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvbWVyY2Fkb3JpYS5tb2RlbCc7XHJcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWwnO1xyXG5pbXBvcnQgeyBEZXRhbGhlUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9kZXRhbGhlLXBlZGlkby5tb2RlbCc7XHJcbmltcG9ydCB7IERldGFsaGVQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2RldGFsaGUtcGVkaWRvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL3BlZGlkby5tb2RlbCc7XHJcbmltcG9ydCB7IFBlZGlkb1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvcGVkaWRvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtZGV0YWxoZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RldGFsaGVzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2RldGFsaGVzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhbGhlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXRlbUlkOiBudW1iZXI7XHJcbiAgICBpdGVtOiBNZXJjYWRvcmlhO1xyXG4gICAgZGV0YWxoZVBlZGlkbzogRGV0YWxoZVBlZGlkbztcclxuICAgIHBlZGlkbzogUGVkaWRvO1xyXG4gICAgcXRkOiBudW1iZXIgPSAwO1xyXG4gICAgdmFsb3JVbjogbnVtYmVyID0gMDtcclxuICAgIHZhbG9yVG90YWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgbWVyY2Fkb3JpYVNlcnZpY2U6IE1lcmNhZG9yaWFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGV0YWxoZVBlZGlkb1NlcnZpY2U6IERldGFsaGVQZWRpZG9TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcGVkaWRvU2VydmljZTogUGVkaWRvU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2VcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcclxuICAgICAgICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICApLmZvckVhY2goKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVhc291cmNlKHRoaXMuaXRlbUlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lke31cclxuXHJcbiAgICBwbHVzKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5xdGQgPCAyMCl7XHJcbiAgICAgICAgICAgIHRoaXMucXRkICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCArPSB0aGlzLnZhbG9yVW47XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FyVmFsb3JUb3RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWludXMoKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMucXRkID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucXRkIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCAtPSB0aGlzLnZhbG9yVW47XHJcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FyVmFsb3JUb3RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkaWNpb25hcigpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5idXNjYXJQZWRpZG8oKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMaWtlKCk6IHZvaWR7fVxyXG5cclxuICAgIHRvZ2dsZUhlYXJ0KGl0ZW0pOiB2b2lke31cclxuXHJcbiAgICBjYXRlZ29yeUljb24oKTogdm9pZHt9XHJcblxyXG4gICAgb25DbG9zZVRhcCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUmVhc291cmNlKGlkOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5tZXJjYWRvcmlhU2VydmljZS5maW5kQnlJZChpZCkuc3Vic2NyaWJlKChyZXNwb25zZTogUmVzcG9uc2VBcGkpPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsb3JVbiA9ICh0aGlzLml0ZW0ucHJlY29QYWdvKih0aGlzLml0ZW0ucG9yY2VudGFnZW1WZW5kYS8xMDAuMCsxKSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gaW5lc3BlcmFkbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhISEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGljaW9uYXJQZWRpZG8oKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBlZGlkb1NlcnZpY2UuYWRpY2lvbmFyKHRoaXMucGVkaWRvKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSk9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQZWRpZG8gYWRpY2lvbmFkbyBjb20gc3VjZXNzbyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZVRhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVSUk8gYW8gYWRpY2lvbmFyIHBlZGlkb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdmVyaWZpY2FyVmFsb3JUb3RhbCgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudmFsb3JUb3RhbCA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLnZhbG9yVG90YWwgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRpY2lvbmFyRGV0YWxoZVBlZGlkbygpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkbyA9IG5ldyBEZXRhbGhlUGVkaWRvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5tZXJjYWRvcmlhID0gdGhpcy5pdGVtO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFsaGVQZWRpZG8ucXVhbnRpZGFkZSA9IHRoaXMucXRkO1xyXG4gICAgICAgICAgICB0aGlzLmRldGFsaGVQZWRpZG8udG90YWwgPSB0aGlzLnZhbG9yVG90YWw7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5wcmVjb1VuaXRhcmlvID0gdGhpcy52YWxvclVuO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBlZGlkby5kZXRhbGhlc1BlZGlkb3MgPT0gbnVsbCB8fCB0aGlzLnBlZGlkby5kZXRhbGhlc1BlZGlkb3MubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8uZGV0YWxoZXNQZWRpZG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZWRpZG8uZGV0YWxoZXNQZWRpZG9zLnB1c2godGhpcy5kZXRhbGhlUGVkaWRvKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVzY2FyUGVkaWRvKCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBlZGlkb1NlcnZpY2UuZ2V0UGVkaWRvKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSk9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkaWNpb25hckRldGFsaGVQZWRpZG8oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19