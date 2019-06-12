"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pedido_service_1 = require("~/app/shared/pedido.service");
var shared_service_1 = require("~/app/shared/shared.service");
var pedido_model_1 = require("~/app/shared/models/pedido.model");
var geoLocation = require("nativescript-geolocation");
var router_1 = require("nativescript-angular/router");
var SacolaComponent = /** @class */ (function () {
    function SacolaComponent(pedidoService, sharedService, routerExtensions) {
        this.pedidoService = pedidoService;
        this.sharedService = sharedService;
        this.routerExtensions = routerExtensions;
        this.pedido = new pedido_model_1.Pedido();
        this.isCartao = true;
    }
    SacolaComponent.prototype.ngOnInit = function () {
        this.buscarMercadorias();
    };
    SacolaComponent.prototype.retirar = function (item) {
        this.removerDetalhe(item);
    };
    SacolaComponent.prototype.trocarFormaPagamento = function () {
        this.isCartao = !this.isCartao;
        this.pedido.tipoPagamento = this.isCartao ? 'Cartão' : 'Dinheiro';
    };
    SacolaComponent.prototype.comprar = function () {
        var _this = this;
        this.pedidoService.comprar(this.pedido).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.pedido = response.data;
                    alert('Compra efetuada com sucesso!');
                    _this.routerExtensions.back();
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
    };
    SacolaComponent.prototype.enableLocationServices = function () {
        var _this = this;
        geoLocation.isEnabled().then(function (enabled) {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(function () { return _this.showLocation(); });
            }
            else {
                _this.showLocation();
            }
        });
    };
    SacolaComponent.prototype.showLocation = function () {
        var _this = this;
        geoLocation.watchLocation(function (location) {
            _this.currentGeoLocation = location;
            alert('Localização Capturada com sucesso!');
            _this.pedido.lat = _this.currentGeoLocation.latitude;
            _this.pedido.log = _this.currentGeoLocation.longitude;
            // alert(this.currentGeoLocation.latitude);
            // alert(this.currentGeoLocation.longitude);
        }, function (error) {
            alert(error);
        }, {
            desiredAccuracy: 3,
            updateDistance: 10,
            minimumUpdateTime: 10000000000 * 1
        });
    };
    SacolaComponent.prototype.buscarMercadorias = function () {
        var _this = this;
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.pedido = response.data;
                    _this.pedido.tipoPagamento = _this.isCartao ? 'Cartão' : 'Dinheiro';
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
    };
    SacolaComponent.prototype.removerDetalhe = function (item) {
        var _this = this;
        this.pedidoService.removerDetalhe(this.sharedService.user.id, item.id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.pedido = response.data;
                    _this.pedido.tipoPagamento = _this.isCartao ? 'Cartão' : 'Dinheiro';
                    alert("Pedido \"" + item.quantidade + " x  " + item.mercadoria.descricao + " R$ " + item.total + "\" Removido com Sucesso!");
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocurreu um erro inesperado tente novamente mais tarde!');
            }
        });
    };
    SacolaComponent = __decorate([
        core_1.Component({
            selector: 'ns-sacola',
            templateUrl: './sacola.component.html',
            styleUrls: ['./sacola.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pedido_service_1.PedidoService,
            shared_service_1.SharedService,
            router_1.RouterExtensions])
    ], SacolaComponent);
    return SacolaComponent;
}());
exports.SacolaComponent = SacolaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fjb2xhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY29sYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsOERBQTREO0FBQzVELDhEQUE0RDtBQUU1RCxpRUFBMEQ7QUFFMUQsc0RBQXdEO0FBQ3hELHNEQUErRDtBQVEvRDtJQU1JLHlCQUNZLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGdCQUFrQztRQUZsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUDlDLFdBQU0sR0FBVyxJQUFJLHFCQUFNLEVBQUUsQ0FBQztRQUU5QixhQUFRLEdBQVksSUFBSSxDQUFDO0lBUXpCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUFtQjtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw4Q0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXFCO1lBQ3BFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtvQkFD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Z0JBQ2xCLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7b0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ2xFLEtBQUssQ0FBQyxjQUFXLElBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLFlBQU8sSUFBSSxDQUFDLEtBQUssNkJBQXlCLENBQUMsQ0FBQztpQkFDL0c7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0o7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7YUFDbkU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuR1EsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FRNkIsOEJBQWE7WUFDYiw4QkFBYTtZQUNWLHlCQUFnQjtPQVRyQyxlQUFlLENBb0czQjtJQUFELHNCQUFDO0NBQUEsQUFwR0QsSUFvR0M7QUFwR1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3BlZGlkby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWwnO1xyXG5pbXBvcnQgeyBQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL3BlZGlkby5tb2RlbCc7XHJcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL2RldGFsaGUtcGVkaWRvLm1vZGVsJztcclxuaW1wb3J0ICogYXMgZ2VvTG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zYWNvbGEnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NhY29sYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zYWNvbGEuY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhY29sYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcGVkaWRvOiBQZWRpZG8gPSBuZXcgUGVkaWRvKCk7XHJcbiAgICBjdXJyZW50R2VvTG9jYXRpb246IGFueTtcclxuICAgIGlzQ2FydGFvOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBlZGlkb1NlcnZpY2U6IFBlZGlkb1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYnVzY2FyTWVyY2Fkb3JpYXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRpcmFyKGl0ZW06IERldGFsaGVQZWRpZG8pIHtcclxuICAgICAgICB0aGlzLnJlbW92ZXJEZXRhbGhlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyb2NhckZvcm1hUGFnYW1lbnRvKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5pc0NhcnRhbyA9ICF0aGlzLmlzQ2FydGFvO1xyXG4gICAgICAgIHRoaXMucGVkaWRvLnRpcG9QYWdhbWVudG8gPSB0aGlzLmlzQ2FydGFvID8gJ0NhcnTDo28nIDogJ0RpbmhlaXJvJztcclxuICAgIH1cclxuXHJcbiAgICBjb21wcmFyKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLmNvbXByYXIodGhpcy5wZWRpZG8pLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdDb21wcmEgZWZldHVhZGEgY29tIHN1Y2Vzc28hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY3VycmV1IHVtIGVycm8gaW5lc3BlcmFkbyB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZUxvY2F0aW9uU2VydmljZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZ2VvTG9jYXRpb24uaXNFbmFibGVkKCkudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBnZW9Mb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHRoaXMuc2hvd0xvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0xvY2F0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGdlb0xvY2F0aW9uLndhdGNoTG9jYXRpb24obG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHZW9Mb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBhbGVydCgnTG9jYWxpemHDp8OjbyBDYXB0dXJhZGEgY29tIHN1Y2Vzc28hJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGVkaWRvLmxhdCA9IHRoaXMuY3VycmVudEdlb0xvY2F0aW9uLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLnBlZGlkby5sb2cgPSB0aGlzLmN1cnJlbnRHZW9Mb2NhdGlvbi5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuY3VycmVudEdlb0xvY2F0aW9uLmxhdGl0dWRlKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQodGhpcy5jdXJyZW50R2VvTG9jYXRpb24ubG9uZ2l0dWRlKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMTAsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtVXBkYXRlVGltZTogMTAwMDAwMDAwMDAgKiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVzY2FyTWVyY2Fkb3JpYXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLmdldFBlZGlkbyh0aGlzLnNoYXJlZFNlcnZpY2UudXNlci5pZCkuc3Vic2NyaWJlKChyZXNwb25zZTogUmVzcG9uc2VBcGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkbyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8udGlwb1BhZ2FtZW50byA9IHRoaXMuaXNDYXJ0YW8gPyAnQ2FydMOjbycgOiAnRGluaGVpcm8nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jdXJyZXUgdW0gZXJybyBpbmVzcGVyYWRvIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVyRGV0YWxoZShpdGVtOiBEZXRhbGhlUGVkaWRvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLnJlbW92ZXJEZXRhbGhlKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkLCBpdGVtLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkby50aXBvUGFnYW1lbnRvID0gdGhpcy5pc0NhcnRhbyA/ICdDYXJ0w6NvJyA6ICdEaW5oZWlybyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYFBlZGlkbyBcIiR7aXRlbS5xdWFudGlkYWRlfSB4ICAke2l0ZW0ubWVyY2Fkb3JpYS5kZXNjcmljYW99IFIkICR7aXRlbS50b3RhbH1cIiBSZW1vdmlkbyBjb20gU3VjZXNzbyFgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdPY3VycmV1IHVtIGVycm8gaW5lc3BlcmFkbyB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==