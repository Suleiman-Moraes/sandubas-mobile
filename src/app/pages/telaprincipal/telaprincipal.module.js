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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYXByaW5jaXBhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWxhcHJpbmNpcGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCwrRUFBNEU7QUFDNUUsc0RBQXVFO0FBQ3ZFLHNGQUFtRjtBQVVuRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBUi9CLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRTtnQkFDUCx5REFBMEI7Z0JBQzFCLGlDQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRlbGFwcmluY2lwYWxSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90ZWxhcHJpbmNpcGFsLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGVsYVByaW5jaXBhbENvbXBvbmVudCB9IGZyb20gJy4vdGVsYS1wcmluY2lwYWwvdGVsYS1wcmluY2lwYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGVsYVByaW5jaXBhbENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgVGVsYXByaW5jaXBhbFJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVsYXByaW5jaXBhbE1vZHVsZSB7IH1cclxuIl19