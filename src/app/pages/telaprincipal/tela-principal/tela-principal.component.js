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
        this.routerExtensions.navigate(["detalhe", {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQUV4RCxzRUFBb0U7QUFRcEU7SUFTSSxnQ0FDWSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFDOUcsU0FBSSxHQUFTLElBQUksaUJBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFnQjtRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsMENBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCw0Q0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUE0QjtJQUM1QiwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxtREFBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRU8sdUNBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLG9EQUFtQixHQUEzQjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQSxXQUFXO1lBQ1QsSUFBRyxXQUFXLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDMUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3JDO2lCQUNHO2dCQUNGLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVELHNDQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkdRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVcyQiwwQkFBVztZQUNOLHlCQUFnQjtZQUNmLHNDQUFpQjtPQVp2QyxzQkFBc0IsQ0F3R2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXhHRCxJQXdHQztBQXhHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVyY2Fkb3JpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvbWVyY2Fkb3JpYS5tb2RlbCc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tZXJjYWRvcmlhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLXRlbGEtcHJpbmNpcGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBUZWxhUHJpbmNpcGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlO1xuICAgIG1lc3NhZ2UgPSBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkLiBUaGlzIGlzIHdoZXJlIHlvdSBidWlsZCB5b3VyIGNvcmUgYXBwbGljYXRpb24gZnVuY3Rpb25hbGl0eS5cIjtcbiAgICB1c2VyOiBVc2VyID0gbmV3IFVzZXI7XG4gICAgbWVyY2Fkb3JpYXM6IE1lcmNhZG9yaWFbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgc2VsZWN0ZWRUYWIgPSAwO1xuICAgIHNlbGVjdGVkVGFidmlldyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBtZXJjYWRvcmlhU2VydmljZTogTWVyY2Fkb3JpYVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlID0gU2hhcmVkU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZlcmZpY2FyVXNlckxvZ2FkbygpO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnNoYXJlZFNlcnZpY2UudXNlcjtcbiAgICAgICAgdGhpcy5jYXJyZWdhck1lcmNhZG9yaWFzKCk7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oaXRlbTogTWVyY2Fkb3JpYSkge1xuICAgICAgICBhbGVydChpdGVtLmRlc2NyaWNhbyk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhbGhlXCIsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiAgICB9XG5cbiAgICBvbkJlbGxUYXAoKSB7XG4gICAgfVxuXG4gICAgb25TZWFyY2hUYXAoKSB7XG4gICAgfVxuXG4gICAgb25Qb3B1bGFyVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XG4gICAgfVxuXG4gICAgb25DYXRlZ29yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xuICAgIH1cblxuICAgIG9uUHJvbW9zVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XG4gICAgfVxuXG4gICAgLy9Cb3R0b20gbmF2IGJhciB0YXAgbWV0aG9kc1xuICAgIG9uSG9tZVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gICAgfVxuXG4gICAgb25DYXJ0VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMTtcbiAgICB9XG5cbiAgICBvbkhpc3RvcnlUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xuICAgIH1cblxuICAgIG9uQWJvdXRUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xuICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmVyZmljYXJVc2VyTG9nYWRvKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2hhcmVkU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYXJyZWdhck1lcmNhZG9yaWFzKCk6IHZvaWR7XG4gICAgICAgIHRoaXMubWVyY2Fkb3JpYVNlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3BvbnNlQXBpID0+IHtcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2VBcGkuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmNhZG9yaWFzID0gcmVzcG9uc2VBcGkuZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpLmVycm9zLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlNhbmR1YmFzIEJyYXNpbFwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=