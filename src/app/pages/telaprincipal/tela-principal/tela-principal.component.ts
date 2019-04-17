import { User } from './../../../shared/user.model';
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SharedService } from '~/app/shared/shared.service';
import { UserService } from '~/app/shared/user.service';

@Component({
    selector: "app-tela-principal",
    moduleId: module.id,
    templateUrl: "./tela-principal.component.html",
    styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
    sharedService: SharedService;
    message = "You have successfully authenticated. This is where you build your core application functionality.";
    user: User = new User;

    selectedTab = 0;
    selectedTabview = 0;

    constructor(
        private userService: UserService, 
        private routerExtensions: RouterExtensions
    ){
        this.sharedService = SharedService.getInstance();
    }

    ngOnInit(): void { 
        this.verficarUserLogado();
        this.user = this.sharedService.user;
    }

    onBellTap() {
    }

    onSearchTap() {
    }

    onPopularTap() {
        this.selectedTabview = 0;
    }

    onCategoryTap() {
        this.selectedTabview = 1;
    }

    onPromosTap() {
        this.selectedTabview = 2;
    }

    //Bottom nav bar tap methods
    onHomeTap() {
        this.selectedTab = 0;
    }

    onCartTap() {
        this.selectedTab = 1;
    }

    onHistoryTap() {
        this.selectedTab = 2;
    }

    onAboutTap() {
        this.selectedTab = 3;
        this.logout();
    }

    private verficarUserLogado(): void{
        if(!this.sharedService.isLoggedIn()){
            this.logout();
        }
    }

    private logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}


