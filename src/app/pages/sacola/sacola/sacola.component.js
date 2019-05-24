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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fjb2xhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY29sYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsOERBQTREO0FBQzVELDhEQUE0RDtBQUc1RCxpRUFBMEQ7QUFRMUQ7SUFJRSx5QkFDWSxhQUE0QixFQUM1QixhQUE0QjtRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUoxQyxXQUFNLEdBQVcsSUFBSSxxQkFBTSxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQUVGLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ08sMkNBQWlCLEdBQXpCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFvQjtZQUNwRixJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUM7Z0JBQ2hCLElBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7b0JBQ3RCLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztpQkFDN0I7cUJBQUk7b0JBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0w7aUJBQUk7Z0JBQ0QsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7YUFDbkU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExQlUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FNMkIsOEJBQWE7WUFDYiw4QkFBYTtPQU43QixlQUFlLENBMkIzQjtJQUFELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGVkaWRvU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9wZWRpZG8uc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lcmNhZG9yaWEgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL21lcmNhZG9yaWEubW9kZWwnO1xuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbCc7XG5pbXBvcnQgeyBQZWRpZG8gfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL3BlZGlkby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNhY29sYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWNvbGEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWNvbGEuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTYWNvbGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wZWRpZG86IFBlZGlkbyA9IG5ldyBQZWRpZG8oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcGVkaWRvU2VydmljZTogUGVkaWRvU2VydmljZSxcbiAgICAgIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZVxuICApIHtcblxuICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5idXNjYXJNZXJjYWRvcmlhcygpO1xuICB9XG4gIHByaXZhdGUgYnVzY2FyTWVyY2Fkb3JpYXMoKTogdm9pZCB7XG4gICAgICB0aGlzLnBlZGlkb1NlcnZpY2UuZ2V0UGVkaWRvKHRoaXMuc2hhcmVkU2VydmljZS51c2VyLmlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOlJlc3BvbnNlQXBpKSA9PntcbiAgICAgICAgICBpZihyZXNwb25zZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG8gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgYWxlcnQoJ09jdXJyZXUgdW0gZXJybyBpbmVzcGVyYWRvIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlIScpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=