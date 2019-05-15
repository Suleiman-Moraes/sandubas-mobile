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
        this.valorUn = 0;
        this.valorTotal = 0;
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = +params["id"];
            _this.loadReasource(_this.itemId);
        });
    }
    DetalhesComponent.prototype.ngOnInit = function () { };
    DetalhesComponent.prototype.plus = function () {
        if (this.qtd < 20) {
            this.qtd += 1;
            this.valorTotal += this.valorUn;
            this.verificarValorTotal();
        }
    };
    DetalhesComponent.prototype.minus = function () {
        if (this.qtd > 0) {
            this.qtd -= 1;
            this.valorTotal -= this.valorUn;
            this.verificarValorTotal();
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
                    _this.valorUn = (_this.item.precoPago * (_this.item.porcentagemVenda / 100.0 + 1));
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
    DetalhesComponent.prototype.verificarValorTotal = function () {
        if (this.valorTotal < 0) {
            this.valorTotal = 0;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWxoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSxzREFBcUQ7QUFDckQsNENBQTJDO0FBRTNDLHNFQUFvRTtBQVVwRTtJQVFJLDJCQUNZLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxJQUFVLEVBQ1YsaUJBQW9DO1FBSmhELGlCQWFDO1FBWlcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUmhELFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBUW5CLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ3JELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNiLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQVEsR0FBUixjQUFpQixDQUFDO0lBRWxCLGdDQUFJLEdBQUo7UUFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFDO1lBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7SUFFTCxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLGNBQW1CLENBQUM7SUFFcEIsdUNBQVcsR0FBWCxVQUFZLElBQUksSUFBUSxDQUFDO0lBRXpCLHdDQUFZLEdBQVosY0FBcUIsQ0FBQztJQUV0QixzQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixFQUFTO1FBQS9CLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFxQjtZQUNoRSxJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUM7Z0JBQ2hCLElBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7b0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0U7cUJBQUk7b0JBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0o7aUJBQUk7Z0JBQ0QsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7YUFDdEU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTywrQ0FBbUIsR0FBM0I7UUFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQXRFUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBVXlCLGtCQUFTO1lBQ0YseUJBQWdCO1lBQzVCLFdBQUk7WUFDUyxzQ0FBaUI7T0FadkMsaUJBQWlCLENBdUU3QjtJQUFELHdCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVyY2Fkb3JpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tb2RlbHMvbWVyY2Fkb3JpYS5tb2RlbCc7XG5pbXBvcnQgeyBNZXJjYWRvcmlhU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9tZXJjYWRvcmlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tICd+L2FwcC9zaGFyZWQvbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1kZXRhbGhlcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RldGFsaGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhbGhlcy5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWxoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaXRlbUlkOiBudW1iZXI7XG4gICAgaXRlbTogTWVyY2Fkb3JpYTtcbiAgICBxdGQ6IG51bWJlciA9IDA7XG4gICAgdmFsb3JVbjogbnVtYmVyID0gMDtcbiAgICB2YWxvclRvdGFsOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIG1lcmNhZG9yaWFTZXJ2aWNlOiBNZXJjYWRvcmlhU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2FkUmVhc291cmNlKHRoaXMuaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZHt9XG5cbiAgICBwbHVzKCk6IHZvaWR7XG4gICAgICAgIGlmKHRoaXMucXRkIDwgMjApe1xuICAgICAgICAgICAgdGhpcy5xdGQgKz0gMTtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCArPSB0aGlzLnZhbG9yVW47XG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhclZhbG9yVG90YWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbWludXMoKTp2b2lke1xuICAgICAgICBpZih0aGlzLnF0ZCA+IDApe1xuICAgICAgICAgICAgdGhpcy5xdGQgLT0gMTtcbiAgICAgICAgICAgIHRoaXMudmFsb3JUb3RhbCAtPSB0aGlzLnZhbG9yVW47XG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhclZhbG9yVG90YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUxpa2UoKTogdm9pZHt9XG5cbiAgICB0b2dnbGVIZWFydChpdGVtKTogdm9pZHt9XG5cbiAgICBjYXRlZ29yeUljb24oKTogdm9pZHt9XG5cbiAgICBvbkNsb3NlVGFwKCk6IHZvaWR7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUmVhc291cmNlKGlkOm51bWJlcil7XG4gICAgICAgIHRoaXMubWVyY2Fkb3JpYVNlcnZpY2UuZmluZEJ5SWQoaWQpLnN1YnNjcmliZSgocmVzcG9uc2U6IFJlc3BvbnNlQXBpKT0+e1xuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxvclVuID0gKHRoaXMuaXRlbS5wcmVjb1BhZ28qKHRoaXMuaXRlbS5wb3JjZW50YWdlbVZlbmRhLzEwMC4wKzEpKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3MuZm9yRWFjaCh4ID0+IGFsZXJ0KHgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnT2NvcnJldSB1bSBlcnJvIGluZXNwZXJhZG8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlISEhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIHZlcmlmaWNhclZhbG9yVG90YWwoKTogdm9pZHtcbiAgICAgICAgaWYodGhpcy52YWxvclRvdGFsIDwgMCl7XG4gICAgICAgICAgICB0aGlzLnZhbG9yVG90YWwgPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19