"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./../../../shared/user.model");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_service_1 = require("~/app/shared/shared.service");
var user_service_1 = require("~/app/shared/user.service");
var mercadoria_service_1 = require("~/app/shared/mercadoria.service");
var pedido_service_1 = require("~/app/shared/pedido.service");
var web_view_1 = require("tns-core-modules/ui/web-view");
var TelaPrincipalComponent = /** @class */ (function () {
    function TelaPrincipalComponent(userService, routerExtensions, mercadoriaService, pedidoService) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.mercadoriaService = mercadoriaService;
        this.pedidoService = pedidoService;
        this.message = "You have successfully authenticated. This is where you build your core application functionality.";
        this.user = new user_model_1.User;
        this.mercadorias = new Array();
        this.webViewSrc = "https://suleiman-moraes.github.io/sandubas/#/1/rota";
        this.selectedTab = 0;
        this.selectedTabview = 0;
        this.isEntrega = false;
        this.sharedService = shared_service_1.SharedService.getInstance();
    }
    TelaPrincipalComponent.prototype.ngOnInit = function () {
        this.verficarUserLogado();
        this.user = this.sharedService.user;
        this.webViewSrc = "https://suleiman-moraes.github.io/sandubas/#/" + this.user.id + "/rota";
        this.carregarMercadorias();
    };
    TelaPrincipalComponent.prototype.ngAfterViewInit = function () {
        var webview = this.webViewRef.nativeElement;
        var label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            label.text = message;
            console.log("WebView message - " + message);
        });
    };
    TelaPrincipalComponent.prototype.showItem = function (item) {
        this.routerExtensions.navigate(["detalhe/" + item.id, {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            }]);
    };
    TelaPrincipalComponent.prototype.onBellTap = function () {
        this.isEntrega = !this.isEntrega;
    };
    TelaPrincipalComponent.prototype.onSearchTap = function () {
    };
    TelaPrincipalComponent.prototype.onPopularTap = function () {
        this.selectedTabview = 0;
    };
    TelaPrincipalComponent.prototype.onCategoryTap = function () {
        this.selectedTabview = 1;
    };
    TelaPrincipalComponent.prototype.onPromosTap = function () {
        this.selectedTabview = 2;
    };
    //Bottom nav bar tap methods
    TelaPrincipalComponent.prototype.onHomeTap = function () {
        this.selectedTab = 0;
    };
    TelaPrincipalComponent.prototype.onCartTap = function () {
        this.selectedTab = 1;
        this.routerExtensions.navigate(["sacola", {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            }]);
    };
    TelaPrincipalComponent.prototype.onHistoryTap = function () {
        this.selectedTab = 2;
    };
    TelaPrincipalComponent.prototype.onAboutTap = function () {
        this.selectedTab = 3;
        this.logout();
    };
    TelaPrincipalComponent.prototype.verficarUserLogado = function () {
        if (!this.sharedService.isLoggedIn()) {
            this.logout();
        }
    };
    TelaPrincipalComponent.prototype.logout = function () {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    TelaPrincipalComponent.prototype.carregarMercadorias = function () {
        var _this = this;
        this.mercadoriaService.findAll().subscribe(function (responseApi) {
            if (responseApi.data != null) {
                _this.mercadorias = responseApi.data;
            }
            else {
                responseApi.erros.forEach(function (x) {
                    _this.alert(x);
                });
            }
        });
    };
    TelaPrincipalComponent.prototype.alert = function (message) {
        return alert({
            title: "Sandubas Brasil",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("myWebView"),
        __metadata("design:type", core_1.ElementRef)
    ], TelaPrincipalComponent.prototype, "webViewRef", void 0);
    __decorate([
        core_1.ViewChild("urlField"),
        __metadata("design:type", core_1.ElementRef)
    ], TelaPrincipalComponent.prototype, "urlFieldRef", void 0);
    __decorate([
        core_1.ViewChild("labelResult"),
        __metadata("design:type", core_1.ElementRef)
    ], TelaPrincipalComponent.prototype, "labelResultRef", void 0);
    TelaPrincipalComponent = __decorate([
        core_1.Component({
            selector: 'ns-tela-principal',
            templateUrl: './tela-principal.component.html',
            styleUrls: ['./tela-principal.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.RouterExtensions,
            mercadoria_service_1.MercadoriaService,
            pedido_service_1.PedidoService])
    ], TelaPrincipalComponent);
    return TelaPrincipalComponent;
}());
exports.TelaPrincipalComponent = TelaPrincipalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsYS1wcmluY2lwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQW9EO0FBQ3BELHNDQUF3RjtBQUN4RixzREFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDBEQUF3RDtBQUV4RCxzRUFBb0U7QUFDcEUsOERBQTREO0FBQzVELHlEQUFzRTtBQVN0RTtJQWVJLGdDQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsYUFBNEI7UUFINUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBakJ4QyxZQUFPLEdBQUcsbUdBQW1HLENBQUM7UUFDOUcsU0FBSSxHQUFTLElBQUksaUJBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hDLGVBQVUsR0FBVyxxREFBcUQsQ0FBQztRQUUzRSxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBWXZCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxrREFBZ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQU8sQ0FBQztRQUN0RixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFD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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lcmNhZG9yaWEgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL21lcmNhZG9yaWEubW9kZWwnO1xyXG5pbXBvcnQgeyBNZXJjYWRvcmlhU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tZXJjYWRvcmlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZWRpZG9TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3BlZGlkby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy10ZWxhLXByaW5jaXBhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVsYS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbGFQcmluY2lwYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZTtcclxuICAgIG1lc3NhZ2UgPSBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkLiBUaGlzIGlzIHdoZXJlIHlvdSBidWlsZCB5b3VyIGNvcmUgYXBwbGljYXRpb24gZnVuY3Rpb25hbGl0eS5cIjtcclxuICAgIHVzZXI6IFVzZXIgPSBuZXcgVXNlcjtcclxuICAgIG1lcmNhZG9yaWFzOiBNZXJjYWRvcmlhW10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHdlYlZpZXdTcmM6IHN0cmluZyA9IFwiaHR0cHM6Ly9zdWxlaW1hbi1tb3JhZXMuZ2l0aHViLmlvL3NhbmR1YmFzLyMvMS9yb3RhXCI7XHJcblxyXG4gICAgc2VsZWN0ZWRUYWIgPSAwO1xyXG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcclxuICAgIGlzRW50cmVnYTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJteVdlYlZpZXdcIikgd2ViVmlld1JlZjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJ1cmxGaWVsZFwiKSB1cmxGaWVsZFJlZjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJsYWJlbFJlc3VsdFwiKSBsYWJlbFJlc3VsdFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBtZXJjYWRvcmlhU2VydmljZTogTWVyY2Fkb3JpYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwZWRpZG9TZXJ2aWNlOiBQZWRpZG9TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UgPSBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZXJmaWNhclVzZXJMb2dhZG8oKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnNoYXJlZFNlcnZpY2UudXNlcjtcclxuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSBgaHR0cHM6Ly9zdWxlaW1hbi1tb3JhZXMuZ2l0aHViLmlvL3NhbmR1YmFzLyMvJHt0aGlzLnVzZXIuaWR9L3JvdGFgO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYXJNZXJjYWRvcmlhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMud2ViVmlld1JlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBsYWJlbDogTGFiZWwgPSB0aGlzLmxhYmVsUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGFiZWwudGV4dCA9IFwiV2ViVmlldyBpcyBzdGlsbCBsb2FkaW5nLi4uXCI7XHJcblxyXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGlmICghYXJncy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mIFwiICsgYXJncy51cmw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBsb2FkaW5nIFwiICsgYXJncy51cmwgKyBcIjogXCIgKyBhcmdzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJdGVtKGl0ZW06IE1lcmNhZG9yaWEpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZGV0YWxoZS9cIiArIGl0ZW0uaWQsIHtcclxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVsbFRhcCgpIHtcclxuICAgICAgICB0aGlzLmlzRW50cmVnYSA9ICF0aGlzLmlzRW50cmVnYTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRhcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblBvcHVsYXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2F0ZWdvcnlUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvbW9zVGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL0JvdHRvbSBuYXYgYmFyIHRhcCBtZXRob2RzXHJcbiAgICBvbkhvbWVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJ0VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAxO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzYWNvbGFcIiwge1xyXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaXN0b3J5VGFwKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XHJcbiAgICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZlcmZpY2FyVXNlckxvZ2FkbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2hhcmVkU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcnJlZ2FyTWVyY2Fkb3JpYXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXJjYWRvcmlhU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZUFwaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VBcGkuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJjYWRvcmlhcyA9IHJlc3BvbnNlQXBpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaS5lcnJvcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYW5kdWJhcyBCcmFzaWxcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=