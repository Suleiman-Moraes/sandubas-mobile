"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./../../../shared/user.model");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_service_1 = require("~/shared/user.service");
var shared_service_1 = require("~/shared/shared.service");
var TelaPrincipalComponent = /** @class */ (function () {
    function TelaPrincipalComponent(userService, routerExtensions) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.message = "You have successfully authenticated. This is where you build your core application functionality.";
        this.user = new user_model_1.User;
        this.selectedTab = 0;
        this.selectedTabview = 0;
        this.sharedService = shared_service_1.SharedService.getInstance();
    }
    TelaPrincipalComponent.prototype.ngOnInit = function () {
        this.verficarUserLogado();
        this.user = this.sharedService.user;
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
    TelaPrincipalComponent = __decorate([
        core_1.Component({
            selector: "app-tela-principal",
            moduleId: module.id,
            templateUrl: "./tela-principal.component.html",
            styleUrls: ['./tela-principal.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.RouterExtensions])
    ], TelaPrincipalComponent);
    return TelaPrincipalComponent;
}());
exports.TelaPrincipalComponent = TelaPrincipalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQW9EO0FBQ3BELDBEQUF3RDtBQVF4RDtJQVFJLGdDQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjlDLFlBQU8sR0FBRyxtR0FBbUcsQ0FBQztRQUM5RyxTQUFJLEdBQVMsSUFBSSxpQkFBSSxDQUFDO1FBRXRCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBTWhCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsNENBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sbURBQWtCLEdBQTFCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVPLHVDQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFqRVEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQ2hELENBQUM7eUNBVTJCLDBCQUFXO1lBQ04seUJBQWdCO09BVnJDLHNCQUFzQixDQWtFbEM7SUFBRCw2QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zaGFyZWQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtdGVsYS1wcmluY2lwYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZWxhLXByaW5jaXBhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbGFQcmluY2lwYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZTtcclxuICAgIG1lc3NhZ2UgPSBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkLiBUaGlzIGlzIHdoZXJlIHlvdSBidWlsZCB5b3VyIGNvcmUgYXBwbGljYXRpb24gZnVuY3Rpb25hbGl0eS5cIjtcclxuICAgIHVzZXI6IFVzZXIgPSBuZXcgVXNlcjtcclxuXHJcbiAgICBzZWxlY3RlZFRhYiA9IDA7XHJcbiAgICBzZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlID0gU2hhcmVkU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcclxuICAgICAgICB0aGlzLnZlcmZpY2FyVXNlckxvZ2FkbygpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuc2hhcmVkU2VydmljZS51c2VyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVsbFRhcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRhcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblBvcHVsYXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2F0ZWdvcnlUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvbW9zVGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL0JvdHRvbSBuYXYgYmFyIHRhcCBtZXRob2RzXHJcbiAgICBvbkhvbWVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJ0VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlzdG9yeVRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkFib3V0VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xyXG4gICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2ZXJmaWNhclVzZXJMb2dhZG8oKTogdm9pZHtcclxuICAgICAgICBpZighdGhpcy5zaGFyZWRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSl7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=