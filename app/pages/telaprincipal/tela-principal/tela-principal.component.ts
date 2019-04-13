import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { UserService } from "~/shared/user.service";
import { SharedService } from "~/shared/shared.service";

@Component({
    selector: "app-tela-principal",
    moduleId: module.id,
    templateUrl: "./tela-principal.component.html",
    styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
    sharedService: SharedService;
    message = "You have successfully authenticated. This is where you build your core application functionality.";

    constructor(
        private userService: UserService, 
        private routerExtensions: RouterExtensions
    ){
        this.sharedService = SharedService.getInstance();
    }

    ngOnInit(): void { 
        this.verficarUserLogado();
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    private verficarUserLogado(): void{
        if(!this.sharedService.isLoggedIn()){
            this.logout();
        }
    }
}


