import { User } from './../../../shared/user.model';
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SharedService } from '~/app/shared/shared.service';
import { UserService } from '~/app/shared/user.service';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';
import { MercadoriaService } from '~/app/shared/mercadoria.service';

@Component({
    selector: 'ns-tela-principal',
    templateUrl: './tela-principal.component.html',
    styleUrls: ['./tela-principal.component.css'],
    moduleId: module.id,
})
export class TelaPrincipalComponent implements OnInit {
    sharedService: SharedService;
    message = "You have successfully authenticated. This is where you build your core application functionality.";
    user: User = new User;
    mercadorias: Mercadoria[] = new Array();

    selectedTab = 0;
    selectedTabview = 0;

    constructor(
        private userService: UserService,
        private routerExtensions: RouterExtensions,
        private mercadoriaService: MercadoriaService
    ) {
        this.sharedService = SharedService.getInstance();
    }

    ngOnInit(): void {
        this.verficarUserLogado();
        this.user = this.sharedService.user;
        this.carregarMercadorias();
    }

    showItem(item: Mercadoria) { 
        alert(item.descricao);
        this.routerExtensions.navigate(["detalhe", {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
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

    private verficarUserLogado(): void {
        if (!this.sharedService.isLoggedIn()) {
            this.logout();
        }
    }

    private logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    private carregarMercadorias(): void{
        this.mercadoriaService.findAll().subscribe(
            responseApi => {
              if(responseApi.data != null){
                this.mercadorias = responseApi.data;
              }
              else{
                responseApi.erros.forEach(x => {
                  this.alert(x);
                });
              }
            }
          );
    }

    alert(message: string) {
        return alert({
            title: "Sandubas Brasil",
            okButtonText: "OK",
            message: message
        });
    }
}