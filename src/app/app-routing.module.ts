import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { BackendService } from "./shared/backend.service";

const routes: Routes = [
    { path: "", redirectTo: BackendService.isUserLoggedIn() ? "/principal" : "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "principal", loadChildren: "./pages/telaprincipal/telaprincipal.module#TelaprincipalModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
