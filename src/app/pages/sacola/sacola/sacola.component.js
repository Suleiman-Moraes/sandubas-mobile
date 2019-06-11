"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pedido_service_1 = require("~/app/shared/pedido.service");
var shared_service_1 = require("~/app/shared/shared.service");
var pedido_model_1 = require("~/app/shared/models/pedido.model");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fjb2xhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY29sYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsOERBQTREO0FBQzVELDhEQUE0RDtBQUU1RCxpRUFBMEQ7QUFTMUQ7SUFJSSx5QkFDWSxhQUE0QixFQUM1QixhQUE0QjtRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUp4QyxXQUFNLEdBQVcsSUFBSSxxQkFBTSxFQUFFLENBQUM7SUFPOUIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLElBQW1CO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLDJDQUFpQixHQUF6QjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBcUI7WUFDckYsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFNO2dCQUNILEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsSUFBbUI7UUFBMUMsaUJBYUM7UUFaRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXFCO1lBQ25HLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUM1QixLQUFLLENBQUMsY0FBVyxJQUFJLENBQUMsVUFBVSxZQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxZQUFPLElBQUksQ0FBQyxLQUFLLDZCQUF5QixDQUFDLENBQUM7aUJBQy9HO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFNO2dCQUNILEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUNRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBTTZCLDhCQUFhO1lBQ2IsOEJBQWE7T0FOL0IsZUFBZSxDQStDM0I7SUFBRCxzQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVkaWRvU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9wZWRpZG8uc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvc2hhcmVkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9wZWRpZG8ubW9kZWwnO1xyXG5pbXBvcnQgeyBEZXRhbGhlUGVkaWRvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9kZXRhbGhlLXBlZGlkby5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtc2Fjb2xhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zYWNvbGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2Fjb2xhLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYWNvbGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHBlZGlkbzogUGVkaWRvID0gbmV3IFBlZGlkbygpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGVkaWRvU2VydmljZTogUGVkaWRvU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJ1c2Nhck1lcmNhZG9yaWFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0aXJhcihpdGVtOiBEZXRhbGhlUGVkaWRvKXtcclxuICAgICAgICB0aGlzLnJlbW92ZXJEZXRhbGhlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVzY2FyTWVyY2Fkb3JpYXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wZWRpZG9TZXJ2aWNlLmdldFBlZGlkbyh0aGlzLnNoYXJlZFNlcnZpY2UudXNlci5pZCkuc3Vic2NyaWJlKChyZXNwb25zZTogUmVzcG9uc2VBcGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkbyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT2N1cnJldSB1bSBlcnJvIGluZXNwZXJhZG8gdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZXJEZXRhbGhlKGl0ZW06IERldGFsaGVQZWRpZG8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBlZGlkb1NlcnZpY2UucmVtb3ZlckRldGFsaGUodGhpcy5zaGFyZWRTZXJ2aWNlLnVzZXIuaWQsIGl0ZW0uaWQpLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBQZWRpZG8gXCIke2l0ZW0ucXVhbnRpZGFkZX0geCAgJHtpdGVtLm1lcmNhZG9yaWEuZGVzY3JpY2FvfSBSJCAke2l0ZW0udG90YWx9XCIgUmVtb3ZpZG8gY29tIFN1Y2Vzc28hYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT2N1cnJldSB1bSBlcnJvIGluZXNwZXJhZG8gdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=