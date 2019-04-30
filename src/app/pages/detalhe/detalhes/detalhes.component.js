"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var operators_1 = require("rxjs/operators");
var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(pageRoute, routerExtensions, page) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
        });
    }
    DetalhesComponent.prototype.ngOnInit = function () {
    };
    DetalhesComponent = __decorate([
        core_1.Component({
            selector: 'ns-detalhes',
            templateUrl: './detalhes.component.html',
            styleUrls: ['./detalhes.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            router_1.RouterExtensions,
            page_1.Page])
    ], DetalhesComponent);
    return DetalhesComponent;
}());
exports.DetalhesComponent = DetalhesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBUzNDO0lBS0UsMkJBQ1UsU0FBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVU7UUFIcEIsaUJBWUM7UUFYUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUVsQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoQyxxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNuRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBcEJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPcUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtPQVJULGlCQUFpQixDQXNCN0I7SUFBRCx3QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lcmNhZG9yaWEgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL21lcmNhZG9yaWEubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXRhbGhlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXRhbGhlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFsaGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWxoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGl0ZW1JZDogbnVtYmVyO1xuICBpdGVtOiBNZXJjYWRvcmlhO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxuICApe1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19