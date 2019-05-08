"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sacola_routing_module_1 = require("./sacola-routing.module");
var common_1 = require("nativescript-angular/common");
var sacola_component_1 = require("./sacola/sacola.component");
var SacolaModule = /** @class */ (function () {
    function SacolaModule() {
    }
    SacolaModule = __decorate([
        core_1.NgModule({
            declarations: [sacola_component_1.SacolaComponent],
            imports: [
                sacola_routing_module_1.SacolaRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SacolaModule);
    return SacolaModule;
}());
exports.SacolaModule = SacolaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fjb2xhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY29sYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsaUVBQThEO0FBQzlELHNEQUF1RTtBQUN2RSw4REFBNEQ7QUFVNUQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFSeEIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUMvQixPQUFPLEVBQUU7Z0JBQ1AsMkNBQW1CO2dCQUNuQixpQ0FBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNhY29sYVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NhY29sYS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Fjb2xhQ29tcG9uZW50IH0gZnJvbSAnLi9zYWNvbGEvc2Fjb2xhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NhY29sYUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBTYWNvbGFSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2Fjb2xhTW9kdWxlIHsgfVxuIl19