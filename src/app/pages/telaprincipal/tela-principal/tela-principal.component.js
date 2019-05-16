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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQUV4RCxzRUFBb0U7QUFRcEU7SUFTSSxnQ0FDWSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFDOUcsU0FBSSxHQUFTLElBQUksaUJBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFnQjtRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxVQUFVO29CQUNoQixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCwwQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELDRDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDBDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLG1EQUFrQixHQUExQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTyx1Q0FBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sb0RBQW1CLEdBQTNCO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUN0QyxVQUFBLFdBQVc7WUFDVCxJQUFHLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO2dCQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDckM7aUJBQ0c7Z0JBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRUQsc0NBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsT0FBTyxLQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2R1Esc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBVzJCLDBCQUFXO1lBQ04seUJBQWdCO1lBQ2Ysc0NBQWlCO09BWnZDLHNCQUFzQixDQXdHbEM7SUFBRCw2QkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVyY2Fkb3JpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvbWVyY2Fkb3JpYS5tb2RlbCc7XHJcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtdGVsYS1wcmluY2lwYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZWxhUHJpbmNpcGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2U7XHJcbiAgICBtZXNzYWdlID0gXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4gVGhpcyBpcyB3aGVyZSB5b3UgYnVpbGQgeW91ciBjb3JlIGFwcGxpY2F0aW9uIGZ1bmN0aW9uYWxpdHkuXCI7XHJcbiAgICB1c2VyOiBVc2VyID0gbmV3IFVzZXI7XHJcbiAgICBtZXJjYWRvcmlhczogTWVyY2Fkb3JpYVtdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBtZXJjYWRvcmlhU2VydmljZTogTWVyY2Fkb3JpYVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc2hhcmVkU2VydmljZSA9IFNoYXJlZFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZlcmZpY2FyVXNlckxvZ2FkbygpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuc2hhcmVkU2VydmljZS51c2VyO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYXJNZXJjYWRvcmlhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJdGVtKGl0ZW06IE1lcmNhZG9yaWEpIHsgXHJcbiAgICAgICAgYWxlcnQoaXRlbS5kZXNjcmljYW8pO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhbGhlL1wiICsgaXRlbS5pZCwge1xyXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWxsVGFwKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoVGFwKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9wdWxhclRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXRlZ29yeVRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9tb3NUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQm90dG9tIG5hdiBiYXIgdGFwIG1ldGhvZHNcclxuICAgIG9uSG9tZVRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhcnRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaXN0b3J5VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcbiAgICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZlcmZpY2FyVXNlckxvZ2FkbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2hhcmVkU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcnJlZ2FyTWVyY2Fkb3JpYXMoKTogdm9pZHtcclxuICAgICAgICB0aGlzLm1lcmNhZG9yaWFTZXJ2aWNlLmZpbmRBbGwoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlQXBpID0+IHtcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaS5kYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXJjYWRvcmlhcyA9IHJlc3BvbnNlQXBpLmRhdGE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUFwaS5lcnJvcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlNhbmR1YmFzIEJyYXNpbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19