"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var operators_1 = require("rxjs/operators");
var mercadoria_service_1 = require("~/app/shared/mercadoria.service");
var detalhe_pedido_model_1 = require("~/app/shared/models/detalhe-pedido.model");
var detalhe_pedido_service_1 = require("~/app/shared/detalhe-pedido.service");
var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(pageRoute, routerExtensions, page, mercadoriaService, detalhePedidoService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.mercadoriaService = mercadoriaService;
        this.detalhePedidoService = detalhePedidoService;
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
        this.detalhePedido = new detalhe_pedido_model_1.DetalhePedido();
        this.detalhePedido.mercadoria = this.item;
        this.detalhePedido.quantidade = this.qtd;
        this.detalhePedido.total = this.valorTotal;
        this.detalhePedido.precoUnitario = this.valorUn;
        this.adicionar();
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
        this.detalhePedidoService.post(this.detalhePedido).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    alert('Pedido adicionado com sucesso!!!');
                    _this.onCloseTap();
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
    DetalhesComponent.prototype.verificarValorTotal = function () {
        if (this.valorTotal < 0) {
            this.valorTotal = 0;
        }
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
            detalhe_pedido_service_1.DetalhePedidoService])
    ], DetalhesComponent);
    return DetalhesComponent;
}());
exports.DetalhesComponent = DetalhesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQUVwRSxpRkFBeUU7QUFDekUsOEVBQTJFO0FBUzNFO0lBU0ksMkJBQ1ksU0FBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixpQkFBb0MsRUFDcEMsb0JBQTBDO1FBTHRELGlCQWNDO1FBYlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFUdEQsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFTbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQWlCLENBQUM7SUFFbEIsZ0NBQUksR0FBSjtRQUNJLElBQUcsSUFB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QUN0RTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLCtDQUFtQixHQUEzQjtRQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBaEdRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FXeUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtZQUNTLHNDQUFpQjtZQUNkLDZDQUFvQjtPQWQ3QyxpQkFBaUIsQ0FpRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9tZXJjYWRvcmlhLm1vZGVsJztcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL2RldGFsaGUtcGVkaWRvLm1vZGVsJztcbmltcG9ydCB7IERldGFsaGVQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2RldGFsaGUtcGVkaWRvLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtZGV0YWxoZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXRhbGhlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGV0YWxoZXMuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIERldGFsaGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGl0ZW1JZDogbnVtYmVyO1xuICAgIGl0ZW06IE1lcmNhZG9yaWE7XG4gICAgZGV0YWxoZVBlZGlkbzogRGV0YWxoZVBlZGlkbztcbiAgICBxdGQ6IG51bWJlciA9IDA7XG4gICAgdmFsb3JVbjogbnVtYmVyID0gMDtcbiAgICB2YWxvclRvdGFsOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIG1lcmNhZG9yaWFTZXJ2aWNlOiBNZXJjYWRvcmlhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkZXRhbGhlUGVkaWRvU2VydmljZTogRGV0YWxoZVBlZGlkb1NlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1JZCA9ICtwYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgIHRoaXMubG9hZFJlYXNvdXJjZSh0aGlzLml0ZW1JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWR7fVxuXG4gICAgcGx1cygpOiB2b2lke1xuICAgICAgICBpZih0aGlzLnF0ZCA8IDIwKXtcbiAgICAgICAgICAgIHRoaXMucXRkICs9IDE7XG4gICAgICAgICAgICB0aGlzLnZhbG9yVG90YWwgKz0gdGhpcy52YWxvclVuO1xuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXJWYWxvclRvdGFsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG1pbnVzKCk6dm9pZHtcbiAgICAgICAgaWYodGhpcy5xdGQgPiAwKXtcbiAgICAgICAgICAgIHRoaXMucXRkIC09IDE7XG4gICAgICAgICAgICB0aGlzLnZhbG9yVG90YWwgLT0gdGhpcy52YWxvclVuO1xuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXJWYWxvclRvdGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRpY2lvbmFyKCk6dm9pZHtcbiAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvID0gbmV3IERldGFsaGVQZWRpZG8oKTtcbiAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvLm1lcmNhZG9yaWEgPSB0aGlzLml0ZW07XG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby5xdWFudGlkYWRlID0gdGhpcy5xdGQ7XG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkby50b3RhbCA9IHRoaXMudmFsb3JUb3RhbDtcbiAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvLnByZWNvVW5pdGFyaW8gPSB0aGlzLnZhbG9yVW47XG4gICAgICAgIHRoaXMuYWRpY2lvbmFyKCk7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVMaWtlKCk6IHZvaWR7fVxuXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSk6IHZvaWR7fVxuXG4gICAgY2F0ZWdvcnlJY29uKCk6IHZvaWR7fVxuXG4gICAgb25DbG9zZVRhcCgpOiB2b2lke1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFJlYXNvdXJjZShpZDpudW1iZXIpe1xuICAgICAgICB0aGlzLm1lcmNhZG9yaWFTZXJ2aWNlLmZpbmRCeUlkKGlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSk9PntcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsb3JVbiA9ICh0aGlzLml0ZW0ucHJlY29QYWdvKih0aGlzLml0ZW0ucG9yY2VudGFnZW1WZW5kYS8xMDAuMCsxKSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGljaW9uYXJQZWRpZG8oKTp2b2lke1xuXG4gICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkb1NlcnZpY2UucG9zdCh0aGlzLmRldGFsaGVQZWRpZG8pLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKT0+e1xuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BlZGlkbyBhZGljaW9uYWRvIGNvbSBzdWNlc3NvISEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZVRhcCgpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gaW5lc3BlcmFkbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhISEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgdmVyaWZpY2FyVmFsb3JUb3RhbCgpOiB2b2lke1xuICAgICAgICBpZih0aGlzLnZhbG9yVG90YWwgPCAwKXtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=