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
            selector: 'ns-tela-principal',
            templateUrl: './tela-principal.component.html',
            styleUrls: ['./tela-principal.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.RouterExtensions])
    ], TelaPrincipalComponent);
    return TelaPrincipalComponent;
}());
exports.TelaPrincipalComponent = TelaPrincipalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQVF4RDtJQVFFLGdDQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjlDLFlBQU8sR0FBRyxtR0FBbUcsQ0FBQztRQUM5RyxTQUFJLEdBQVMsSUFBSSxpQkFBSSxDQUFDO1FBRXRCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBTWhCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsNENBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sbURBQWtCLEdBQTFCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVPLHVDQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFqRVUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBVXlCLDBCQUFXO1lBQ04seUJBQWdCO09BVm5DLHNCQUFzQixDQWtFbEM7SUFBRCw2QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC91c2VyLm1vZGVsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRlbGEtcHJpbmNpcGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBUZWxhUHJpbmNpcGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZTtcbiAgbWVzc2FnZSA9IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiO1xuICB1c2VyOiBVc2VyID0gbmV3IFVzZXI7XG5cbiAgc2VsZWN0ZWRUYWIgPSAwO1xuICBzZWxlY3RlZFRhYnZpZXcgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxuICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICl7XG4gICAgICB0aGlzLnNoYXJlZFNlcnZpY2UgPSBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gICAgICB0aGlzLnZlcmZpY2FyVXNlckxvZ2FkbygpO1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5zaGFyZWRTZXJ2aWNlLnVzZXI7XG4gIH1cblxuICBvbkJlbGxUYXAoKSB7XG4gIH1cblxuICBvblNlYXJjaFRhcCgpIHtcbiAgfVxuXG4gIG9uUG9wdWxhclRhcCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgfVxuXG4gIG9uQ2F0ZWdvcnlUYXAoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XG4gIH1cblxuICBvblByb21vc1RhcCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcbiAgfVxuXG4gIC8vQm90dG9tIG5hdiBiYXIgdGFwIG1ldGhvZHNcbiAgb25Ib21lVGFwKCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gIH1cblxuICBvbkNhcnRUYXAoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMTtcbiAgfVxuXG4gIG9uSGlzdG9yeVRhcCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xuICB9XG5cbiAgb25BYm91dFRhcCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAzO1xuICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmVyZmljYXJVc2VyTG9nYWRvKCk6IHZvaWR7XG4gICAgICBpZighdGhpcy5zaGFyZWRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSl7XG4gICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9nb3V0KCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59Il19