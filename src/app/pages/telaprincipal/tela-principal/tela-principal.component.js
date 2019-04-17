"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./../../../shared/user.model");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_service_1 = require("~/app/shared/shared.service");
var user_service_1 = require("~/app/shared/user.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQVF4RDtJQVFJLGdDQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjlDLFlBQU8sR0FBRyxtR0FBbUcsQ0FBQztRQUM5RyxTQUFJLEdBQVMsSUFBSSxpQkFBSSxDQUFDO1FBRXRCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBTWhCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsNENBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sbURBQWtCLEdBQTFCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVPLHVDQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFqRVEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQ2hELENBQUM7eUNBVTJCLDBCQUFXO1lBQ04seUJBQWdCO09BVnJDLHNCQUFzQixDQWtFbEM7SUFBRCw2QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXRlbGEtcHJpbmNpcGFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90ZWxhLXByaW5jaXBhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZWxhUHJpbmNpcGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2U7XHJcbiAgICBtZXNzYWdlID0gXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4gVGhpcyBpcyB3aGVyZSB5b3UgYnVpbGQgeW91ciBjb3JlIGFwcGxpY2F0aW9uIGZ1bmN0aW9uYWxpdHkuXCI7XHJcbiAgICB1c2VyOiBVc2VyID0gbmV3IFVzZXI7XHJcblxyXG4gICAgc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuc2hhcmVkU2VydmljZSA9IFNoYXJlZFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgdGhpcy52ZXJmaWNhclVzZXJMb2dhZG8oKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnNoYXJlZFNlcnZpY2UudXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlbGxUYXAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hUYXAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3B1bGFyVGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhdGVnb3J5VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvblByb21vc1RhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Cb3R0b20gbmF2IGJhciB0YXAgbWV0aG9kc1xyXG4gICAgb25Ib21lVGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FydFRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpc3RvcnlUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgb25BYm91dFRhcCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMztcclxuICAgICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmVyZmljYXJVc2VyTG9nYWRvKCk6IHZvaWR7XHJcbiAgICAgICAgaWYoIXRoaXMuc2hhcmVkU2VydmljZS5pc0xvZ2dlZEluKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19