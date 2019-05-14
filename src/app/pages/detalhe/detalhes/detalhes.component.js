"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var operators_1 = require("rxjs/operators");
var mercadoria_service_1 = require("~/app/shared/mercadoria.service");
var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(pageRoute, routerExtensions, page, mercadoriaService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.mercadoriaService = mercadoriaService;
        this.qtd = 0;
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.loadReasource(_this.itemId);
        });
    }
    DetalhesComponent.prototype.ngOnInit = function () { };
    DetalhesComponent.prototype.plus = function () {
        this.qtd += 1;
    };
    DetalhesComponent.prototype.minus = function () {
        if (this.qtd > 0) {
            this.qtd -= 1;
        }
    };
    DetalhesComponent.prototype.toggleLike = function () { };
    DetalhesComponent.prototype.toggleHeart = function (item) { };
    DetalhesComponent.prototype.categoryIcon = function () { };
    DetalhesComponent.prototype.onCloseTap = function () {
        this.routerExtensions.back();
    };
    DetalhesComponent.prototype.loadReasource = function (id) {
        var _this = this;
        this.mercadoriaService.findById(id).subscribe(function (response) {
            if (response != null) {
                if (response.data != null) {
                    _this.item = response.data;
                }
                else {
                    response.erros.forEach(function (x) { return alert(x); });
                }
            }
            else {
                alert('Ocorreu um erro inesperado, tente novamente mais tarde!!!');
            }
        });
    };
    DetalhesComponent = __decorate([
        core_1.Component({
            selector: 'ns-detalhes',
            templateUrl: './detalhes.component.html',
            styleUrls: ['./detalhes.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            router_1.RouterExtensions,
            page_1.Page,
            mercadoria_service_1.MercadoriaService])
    ], DetalhesComponent);
    return DetalhesComponent;
}());
exports.DetalhesComponent = DetalhesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQVVwRTtJQU1JLDJCQUNZLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsaUJBQW9DO1FBSmhELGlCQWFDO1FBWlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTmhELFFBQUcsR0FBVyxDQUFDLENBQUM7UUFRWixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM5QixxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNyRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDYixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBaUIsQ0FBQztJQUVsQixnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1lBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsc0NBQVUsR0FBVixjQUFtQixDQUFDO0lBRXBCLHVDQUFXLEdBQVgsVUFBWSxJQUFJLElBQVEsQ0FBQztJQUV6Qix3Q0FBWSxHQUFaLGNBQXFCLENBQUM7SUFFdEIsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8seUNBQWEsR0FBckIsVUFBc0IsRUFBUztRQUEvQixpQkFZQztRQVhHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBcUI7WUFDaEUsSUFBRyxRQUFRLElBQUksSUFBSSxFQUFDO2dCQUNoQixJQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFDO29CQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQzdCO3FCQUFJO29CQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO2lCQUFJO2dCQUNELEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2FBQ3RFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkRRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FReUIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDNUIsV0FBSTtZQUNTLHNDQUFpQjtPQVZ2QyxpQkFBaUIsQ0F3RDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21vZGVscy9tZXJjYWRvcmlhLm1vZGVsJztcbmltcG9ydCB7IE1lcmNhZG9yaWFTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL21lcmNhZG9yaWEuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWRldGFsaGVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV0YWxoZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RldGFsaGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEZXRhbGhlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpdGVtSWQ6IG51bWJlcjtcbiAgICBpdGVtOiBNZXJjYWRvcmlhO1xuICAgIHF0ZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBtZXJjYWRvcmlhU2VydmljZTogTWVyY2Fkb3JpYVNlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1JZCA9ICtwYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgIHRoaXMubG9hZFJlYXNvdXJjZSh0aGlzLml0ZW1JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWR7fVxuXG4gICAgcGx1cygpOiB2b2lke1xuICAgICAgICB0aGlzLnF0ZCArPSAxO1xuICAgIH1cblxuICAgIG1pbnVzKCk6dm9pZHtcbiAgICAgICAgaWYodGhpcy5xdGQgPiAwKXtcbiAgICAgICAgICAgIHRoaXMucXRkIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVMaWtlKCk6IHZvaWR7fVxuXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSk6IHZvaWR7fVxuXG4gICAgY2F0ZWdvcnlJY29uKCk6IHZvaWR7fVxuXG4gICAgb25DbG9zZVRhcCgpOiB2b2lke1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFJlYXNvdXJjZShpZDpudW1iZXIpe1xuICAgICAgICB0aGlzLm1lcmNhZG9yaWFTZXJ2aWNlLmZpbmRCeUlkKGlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZUFwaSk9PntcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9zLmZvckVhY2goeCA9PiBhbGVydCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSEhIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=