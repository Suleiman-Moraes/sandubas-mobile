import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TelaprincipalRoutingModule } from "./telaprincipal-routing.module";
import { TelaPrincipalComponent } from "./tela-principal/tela-principal.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        TelaprincipalRoutingModule
    ],
    declarations: [
        TelaPrincipalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TelaprincipalModule { }
