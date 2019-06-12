"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var telaprincipal_routing_module_1 = require("./telaprincipal-routing.module");
var common_1 = require("nativescript-angular/common");
var tela_principal_component_1 = require("./tela-principal/tela-principal.component");
var TelaprincipalModule = /** @class */ (function () {
    function TelaprincipalModule() {
    }
    TelaprincipalModule = __decorate([
        core_1.NgModule({
            declarations: [tela_principal_component_1.TelaPrincipalComponent],
            imports: [
                telaprincipal_routing_module_1.TelaprincipalRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TelaprincipalModule);
    return TelaprincipalModule;
}());
exports.TelaprincipalModule = TelaprincipalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYXByaW5jaXBhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWxhcHJpbmNpcGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCwrRUFBNEU7QUFDNUUsc0RBQXVFO0FBQ3ZFLHNGQUFtRjtBQVVuRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBUi9CLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRTtnQkFDUCx5REFBMEI7Z0JBQzFCLGlDQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGVsYXByaW5jaXBhbFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RlbGFwcmluY2lwYWwtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRlbGFQcmluY2lwYWxDb21wb25lbnQgfSBmcm9tICcuL3RlbGEtcHJpbmNpcGFsL3RlbGEtcHJpbmNpcGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RlbGFQcmluY2lwYWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgVGVsYXByaW5jaXBhbFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBUZWxhcHJpbmNpcGFsTW9kdWxlIHsgfVxuIl19