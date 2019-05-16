"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var detalhe_routing_module_1 = require("./detalhe-routing.module");
var common_1 = require("nativescript-angular/common");
var detalhes_component_1 = require("./detalhes/detalhes.component");
var DetalheModule = /** @class */ (function () {
    function DetalheModule() {
    }
    DetalheModule = __decorate([
        core_1.NgModule({
            declarations: [detalhes_component_1.DetalhesComponent],
            imports: [
                detalhe_routing_module_1.DetalheRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], DetalheModule);
    return DetalheModule;
}());
exports.DetalheModule = DetalheModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhbGhlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxtRUFBZ0U7QUFDaEUsc0RBQXVFO0FBQ3ZFLG9FQUFrRTtBQVVsRTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVJ6QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUU7Z0JBQ1AsNkNBQW9CO2dCQUNwQixpQ0FBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEZXRhbGhlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZGV0YWxoZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERldGFsaGVzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtEZXRhbGhlc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRGV0YWxoZVJvdXRpbmdNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWxoZU1vZHVsZSB7IH1cclxuIl19