import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { BackendService } from "./shared/backend.service";

const routes: Routes = [
    { path: "", redirectTo: BackendService.isUserLoggedIn() ? "/principal" : "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "detalhe", loadChildren: "./app/pages/detalhe/detalhe.module#DetalheModule" },
    { path: "principal", loadChildren: "./app/pages/telaprincipal/telaprincipal.module#TelaprincipalModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
