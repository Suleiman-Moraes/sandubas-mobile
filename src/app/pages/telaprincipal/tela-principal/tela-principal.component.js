"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./../../../shared/user.model");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_service_1 = require("~/app/shared/shared.service");
var user_service_1 = require("~/app/shared/user.service");
var mercadoria_service_1 = require("~/app/shared/mercadoria.service");
var TelaPrincipalComponent = /** @class */ (function () {
    function TelaPrincipalComponent(userService, routerExtensions, mercadoriaService) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.mercadoriaService = mercadoriaService;
        this.message = "You have successfully authenticated. This is where you build your core application functionality.";
        this.user = new user_model_1.User;
        this.mercadorias = new Array();
        this.selectedTab = 0;
        this.selectedTabview = 0;
        this.sharedService = shared_service_1.SharedService.getInstance();
    }
    TelaPrincipalComponent.prototype.ngOnInit = function () {
        this.verficarUserLogado();
        this.user = this.sharedService.user;
        this.carregarMercadorias();
    };
    TelaPrincipalComponent.prototype.showItem = function (item) {
        alert(item.descricao);
        this.routerExtensions.navigate(["detalhe/" + item.id, {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            }]);
    };
    TelaPrincipalComponent.prototype.onBellTap = function () {
    };
    TelaPrincipalComponent.prototype.onSearchTap = function () {
    };
    TelaPrincipalComponent.prototype.onPopularTap = function () {
        this.selectedTabview = 0;
    };
    TelaPrincipalComponent.prototype.onCategoryTap = function () {
        this.selectedTabview = 1;
    };
    TelaPrincipalComponent.prototype.onPromosTap = function () {
        this.selectedTabview = 2;
    };
    //Bottom nav bar tap methods
    TelaPrincipalComponent.prototype.onHomeTap = function () {
        this.selectedTab = 0;
    };
    TelaPrincipalComponent.prototype.onCartTap = function () {
        this.selectedTab = 1;
    };
    TelaPrincipalComponent.prototype.onHistoryTap = function () {
        this.selectedTab = 2;
    };
    TelaPrincipalComponent.prototype.onAboutTap = function () {
        this.selectedTab = 3;
        this.logout();
    };
    TelaPrincipalComponent.prototype.verficarUserLogado = function () {
        if (!this.sharedService.isLoggedIn()) {
            this.logout();
        }
    };
    TelaPrincipalComponent.prototype.logout = function () {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    TelaPrincipalComponent.prototype.carregarMercadorias = function () {
        var _this = this;
        this.mercadoriaService.findAll().subscribe(function (responseApi) {
            if (responseApi.data != null) {
                _this.mercadorias = responseApi.data;
            }
            else {
                responseApi.erros.forEach(function (x) {
                    _this.alert(x);
                });
            }
        });
    };
    TelaPrincipalComponent.prototype.alert = function (message) {
        return alert({
            title: "Sandubas Brasil",
            okButtonText: "OK",
            message: message
        });
    };
    TelaPrincipalComponent = __decorate([
        core_1.Component({
            selector: 'ns-tela-principal',
            templateUrl: './tela-principal.component.html',
            styleUrls: ['./tela-principal.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.RouterExtensions,
            mercadoria_service_1.MercadoriaService])
    ], TelaPrincipalComponent);
    return TelaPrincipalComponent;
}());
exports.TelaPrincipalComponent = TelaPrincipalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQUV4RCxzRUFBb0U7QUFRcEU7SUFTSSxnQ0FDWSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFDOUcsU0FBSSxHQUFTLElBQUksaUJBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFnQjtRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxVQUFVO29CQUNoQixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCwwQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELDRDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDBDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLG1EQUFrQixHQUExQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTyx1Q0FBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sb0RBQW1CLEdBQTNCO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUN0QyxVQUFBLFdBQVc7WUFDVCxJQUFHLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO2dCQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDckM7aUJBQ0c7Z0JBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRUQsc0NBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsT0FBTyxLQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2R1Esc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBVzJCLDBCQUFXO1lBQ04seUJBQWdCO1lBQ2Ysc0NBQWlCO09BWnZDLHNCQUFzQixDQXdHbEM7SUFBRCw2QkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC91c2VyLm1vZGVsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9tZXJjYWRvcmlhLm1vZGVsJztcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtdGVsYS1wcmluY2lwYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZWxhLXByaW5jaXBhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFRlbGFQcmluY2lwYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2U7XG4gICAgbWVzc2FnZSA9IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiO1xuICAgIHVzZXI6IFVzZXIgPSBuZXcgVXNlcjtcbiAgICBtZXJjYWRvcmlhczogTWVyY2Fkb3JpYVtdID0gbmV3IEFycmF5KCk7XG5cbiAgICBzZWxlY3RlZFRhYiA9IDA7XG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIG1lcmNhZG9yaWFTZXJ2aWNlOiBNZXJjYWRvcmlhU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UgPSBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmVyZmljYXJVc2VyTG9nYWRvKCk7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuc2hhcmVkU2VydmljZS51c2VyO1xuICAgICAgICB0aGlzLmNhcnJlZ2FyTWVyY2Fkb3JpYXMoKTtcbiAgICB9XG5cbiAgICBzaG93SXRlbShpdGVtOiBNZXJjYWRvcmlhKSB7IFxuICAgICAgICBhbGVydChpdGVtLmRlc2NyaWNhbyk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhbGhlL1wiICsgaXRlbS5pZCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuICAgIH1cblxuICAgIG9uQmVsbFRhcCgpIHtcbiAgICB9XG5cbiAgICBvblNlYXJjaFRhcCgpIHtcbiAgICB9XG5cbiAgICBvblBvcHVsYXJUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICB9XG5cbiAgICBvbkNhdGVnb3J5VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XG4gICAgfVxuXG4gICAgb25Qcm9tb3NUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcbiAgICB9XG5cbiAgICAvL0JvdHRvbSBuYXYgYmFyIHRhcCBtZXRob2RzXG4gICAgb25Ib21lVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMDtcbiAgICB9XG5cbiAgICBvbkNhcnRUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xuICAgIH1cblxuICAgIG9uSGlzdG9yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XG4gICAgfVxuXG4gICAgb25BYm91dFRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XG4gICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2ZXJmaWNhclVzZXJMb2dhZG8oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaGFyZWRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhcnJlZ2FyTWVyY2Fkb3JpYXMoKTogdm9pZHtcbiAgICAgICAgdGhpcy5tZXJjYWRvcmlhU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzcG9uc2VBcGkgPT4ge1xuICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaS5kYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMubWVyY2Fkb3JpYXMgPSByZXNwb25zZUFwaS5kYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VBcGkuZXJyb3MuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoeCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgIH1cblxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiU2FuZHViYXMgQnJhc2lsXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==