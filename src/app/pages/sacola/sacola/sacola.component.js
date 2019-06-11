"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pedido_service_1 = require("~/app/shared/pedido.service");
var shared_service_1 = require("~/app/shared/shared.service");
var pedido_model_1 = require("~/app/shared/models/pedido.model");
var geoLocation = require("nativescript-geolocation");
var SacolaComponent = /** @class */ (function () {
    function SacolaComponent(pedidoService, sharedService) {
        this.pedidoService = pedidoService;
        this.sharedService = sharedService;
        this.pedido = new pedido_model_1.Pedido();
    }
    SacolaComponent.prototype.ngOnInit = function () {
        this.buscarMercadorias();
    };
    SacolaComponent.prototype.retirar = function (item) {
        this.removerDetalhe(item);
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
            // alert(this.currentGeoLocation.latitude);
            // alert(this.currentGeoLocation.longitude);
        }, function (error) {
            alert(error);
        }, {
            desiredAccuracy: 3,
            updateDistance: 10,
            minimumUpdateTime: 1000 * 1
        });
    };
    SacolaComponent.prototype.buscarMercadorias = function () {
        var _this = this;
        this.pedidoService.getPedido(this.sharedService.user.id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.pedido = response.data;
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
            shared_service_1.SharedService])
    ], SacolaComponent);
    return SacolaComponent;
}());
exports.SacolaComponent = SacolaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fjb2xhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY29sYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsOERBQTREO0FBQzVELDhEQUE0RDtBQUU1RCxpRUFBMEQ7QUFFMUQsc0RBQXdEO0FBUXhEO0lBS0kseUJBQ1ksYUFBNEIsRUFDNUIsYUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMeEMsV0FBTSxHQUFXLElBQUkscUJBQU0sRUFBRSxDQUFDO0lBUTlCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUFtQjtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnREFBc0IsR0FBdEI7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDSCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUFBLGlCQWFDO1FBWkcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFBLFFBQVE7WUFDOUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztZQUNuQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUM1QywyQ0FBMkM7WUFDM0MsNENBQTRDO1FBQ2hELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFFO1lBQ0ssZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLDJDQUFpQixHQUF6QjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBcUI7WUFDckYsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFNO2dCQUNILEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsSUFBbUI7UUFBMUMsaUJBYUM7UUFaRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXFCO1lBQ25HLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUM1QixLQUFLLENBQUMsY0FBVyxJQUFJLENBQUMsVUFBVSxZQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxZQUFPLElBQUksQ0FBQyxLQUFLLDZCQUF5QixDQUFDLENBQUM7aUJBQy9HO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFNO2dCQUNILEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEVRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBTzZCLDhCQUFhO1lBQ2IsOEJBQWE7T0FQL0IsZUFBZSxDQXlFM0I7SUFBRCxzQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVkaWRvU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9wZWRpZG8uc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvc2hhcmVkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9wZWRpZG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBEZXRhbGhlUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9kZXRhbGhlLXBlZGlkby5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIGdlb0xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zYWNvbGEnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NhY29sYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zYWNvbGEuY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhY29sYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcGVkaWRvOiBQZWRpZG8gPSBuZXcgUGVkaWRvKCk7XHJcbiAgICBjdXJyZW50R2VvTG9jYXRpb246IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBlZGlkb1NlcnZpY2U6IFBlZGlkb1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5idXNjYXJNZXJjYWRvcmlhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldGlyYXIoaXRlbTogRGV0YWxoZVBlZGlkbykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlckRldGFsaGUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlTG9jYXRpb25TZXJ2aWNlcygpOiB2b2lkIHtcclxuICAgICAgICBnZW9Mb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGdlb0xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4gdGhpcy5zaG93TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93TG9jYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgZ2VvTG9jYXRpb24ud2F0Y2hMb2NhdGlvbihsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdlb0xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMb2NhbGl6YcOnw6NvIENhcHR1cmFkYSBjb20gc3VjZXNzbyEnKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQodGhpcy5jdXJyZW50R2VvTG9jYXRpb24ubGF0aXR1ZGUpO1xyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLmN1cnJlbnRHZW9Mb2NhdGlvbi5sb25naXR1ZGUpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxMCxcclxuICAgICAgICAgICAgICAgIG1pbmltdW1VcGRhdGVUaW1lOiAxMDAwICogMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1c2Nhck1lcmNhZG9yaWFzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGVkaWRvU2VydmljZS5nZXRQZWRpZG8odGhpcy5zaGFyZWRTZXJ2aWNlLnVzZXIuaWQpLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jdXJyZXUgdW0gZXJybyBpbmVzcGVyYWRvIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVyRGV0YWxoZShpdGVtOiBEZXRhbGhlUGVkaWRvKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLnJlbW92ZXJEZXRhbGhlKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkLCBpdGVtLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgUGVkaWRvIFwiJHtpdGVtLnF1YW50aWRhZGV9IHggICR7aXRlbS5tZXJjYWRvcmlhLmRlc2NyaWNhb30gUiQgJHtpdGVtLnRvdGFsfVwiIFJlbW92aWRvIGNvbSBTdWNlc3NvIWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcy5mb3JFYWNoKHggPT4gYWxlcnQoeCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jdXJyZXUgdW0gZXJybyBpbmVzcGVyYWRvIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19