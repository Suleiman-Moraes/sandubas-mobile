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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQUV4RCxzRUFBb0U7QUFRcEU7SUFTSSxnQ0FDWSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVZoRCxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFDOUcsU0FBSSxHQUFTLElBQUksaUJBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFnQjtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsMENBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCw0Q0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUE0QjtJQUM1QiwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxtREFBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRU8sdUNBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLG9EQUFtQixHQUEzQjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQSxXQUFXO1lBQ1QsSUFBRyxXQUFXLENBQUMsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDMUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3JDO2lCQUNHO2dCQUNGLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVELHNDQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEdRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVcyQiwwQkFBVztZQUNOLHlCQUFnQjtZQUNmLHNDQUFpQjtPQVp2QyxzQkFBc0IsQ0F1R2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lcmNhZG9yaWEgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL21lcmNhZG9yaWEubW9kZWwnO1xyXG5pbXBvcnQgeyBNZXJjYWRvcmlhU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tZXJjYWRvcmlhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLXRlbGEtcHJpbmNpcGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZWxhLXByaW5jaXBhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZWxhLXByaW5jaXBhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVsYVByaW5jaXBhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlO1xyXG4gICAgbWVzc2FnZSA9IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiO1xyXG4gICAgdXNlcjogVXNlciA9IG5ldyBVc2VyO1xyXG4gICAgbWVyY2Fkb3JpYXM6IE1lcmNhZG9yaWFbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIHNlbGVjdGVkVGFiID0gMDtcclxuICAgIHNlbGVjdGVkVGFidmlldyA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbWVyY2Fkb3JpYVNlcnZpY2U6IE1lcmNhZG9yaWFTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UgPSBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZXJmaWNhclVzZXJMb2dhZG8oKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnNoYXJlZFNlcnZpY2UudXNlcjtcclxuICAgICAgICB0aGlzLmNhcnJlZ2FyTWVyY2Fkb3JpYXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SXRlbShpdGVtOiBNZXJjYWRvcmlhKSB7IFxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJkZXRhbGhlL1wiICsgaXRlbS5pZCwge1xyXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVsbFRhcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRhcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblBvcHVsYXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2F0ZWdvcnlUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvbW9zVGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL0JvdHRvbSBuYXYgYmFyIHRhcCBtZXRob2RzXHJcbiAgICBvbkhvbWVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJ0VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlzdG9yeVRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkFib3V0VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG4gICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2ZXJmaWNhclVzZXJMb2dhZG8oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNoYXJlZFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJyZWdhck1lcmNhZG9yaWFzKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5tZXJjYWRvcmlhU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZUFwaSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2VBcGkuZGF0YSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVyY2Fkb3JpYXMgPSByZXNwb25zZUFwaS5kYXRhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VBcGkuZXJyb3MuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCh4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYW5kdWJhcyBCcmFzaWxcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==