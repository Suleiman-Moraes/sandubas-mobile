import { User } from './../../../shared/user.model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SharedService } from '~/app/shared/shared.service';
import { UserService } from '~/app/shared/user.service';
import { Mercadoria } from '~/app/shared/models/mercadoria.model';
import { MercadoriaService } from '~/app/shared/mercadoria.service';
import { PedidoService } from '~/app/shared/pedido.service';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: 'ns-tela-principal',
    templateUrl: './tela-principal.component.html',
    styleUrls: ['./tela-principal.component.css'],
    moduleId: module.id,
})
export class TelaPrincipalComponent implements OnInit, AfterViewInit {
    sharedService: SharedService;
    message = "You have successfully authenticated. This is where you build your core application functionality.";
    user: User = new User;
    mercadorias: Mercadoria[] = new Array();
    webViewSrc: string = "https://suleiman-moraes.github.io/sandubas/#/1/rota";

    selectedTab = 0;
    selectedTabview = 0;
    isEntrega: boolean = false;

    @ViewChild("myWebView") webViewRef: ElementRef;
    @ViewChild("urlField") urlFieldRef: ElementRef;
    @ViewChild("labelResult") labelResultRef: ElementRef;

    constructor(
        private userService: UserService,
        private routerExtensions: RouterExtensions,
        private mercadoriaService: MercadoriaService,
        private pedidoService: PedidoService
    ) {
        this.sharedService = SharedService.getInstance();
    }

    ngOnInit(): void {
        this.verficarUserLogado();
        this.user = this.sharedService.user;
        this.carregarMercadorias();
    }

    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;
        let label: Label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            label.text = message;
            console.log("WebView message - " + message);
        });
    }

    showItem(item: Mercadoria) {
        this.routerExtensions.navigate(["detalhe/" + item.id, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

    onBellTap() {
        this.isEntrega = !this.isEntrega;
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
        this.routerExtensions.navigate(["sacola", {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
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

    private carregarMercadorias(): void {
        this.mercadoriaService.findAll().subscribe(
            responseApi => {
                if (responseApi.data != null) {
                    this.mercadorias = responseApi.data;
                }
                else {
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
