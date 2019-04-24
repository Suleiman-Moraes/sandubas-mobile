"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Response_api_model_1 = require("./models/Response-api.model");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var sandubas_api_1 = require("./sandubas.api");
var MercadoriaService = /** @class */ (function () {
    function MercadoriaService(http) {
        this.http = http;
    }
    MercadoriaService.prototype.enviarFormulario = function (cadastroEmpresa) {
        return this.http.post("" + null, cadastroEmpresa).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    MercadoriaService.prototype.findAll = function () {
        return this.http.get("" + sandubas_api_1.SANDU_MERCADORIA).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    MercadoriaService.prototype.handleError = function (error) {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return rxjs_1.throwError(error);
    };
    MercadoriaService.prototype.fromJsonResponseApi = function (jsonData) {
        return Object.assign(new Response_api_model_1.ResponseApi(), jsonData);
    };
    MercadoriaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MercadoriaService);
    return MercadoriaService;
}());
exports.MercadoriaService = MercadoriaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2Fkb3JpYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVyY2Fkb3JpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGtFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQThDO0FBQzlDLDZDQUFrRDtBQUNsRCwrQ0FBa0Q7QUFLbEQ7SUFFRSwyQkFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hCLENBQUM7SUFFSCw0Q0FBZ0IsR0FBaEIsVUFBaUIsZUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3BELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcsK0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQzlDLGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLCtDQUFtQixHQUEzQixVQUE0QixRQUFhO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdDQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBM0JVLGlCQUFpQjtRQUg3QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FJZ0IsaUJBQVU7T0FIZixpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbCc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU0FORFVfTUVSQ0FET1JJQSB9IGZyb20gJy4vc2FuZHViYXMuYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2Fkb3JpYVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApe31cblxuICBlbnZpYXJGb3JtdWxhcmlvKGNhZGFzdHJvRW1wcmVzYTogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZUFwaT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke251bGx9YCwgY2FkYXN0cm9FbXByZXNhKS5waXBlKFxuICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICApO1xuICB9XG5cbiAgZmluZEFsbCgpOiBPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtTQU5EVV9NRVJDQURPUklBfWApLnBpcGUoXG4gICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRVJSTyBOQSBSRVFVSVNJw4fDg08gPT4gXCIsIGVycm9yKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGZyb21Kc29uUmVzcG9uc2VBcGkoanNvbkRhdGE6IGFueSk6IFJlc3BvbnNlQXBpe1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBSZXNwb25zZUFwaSgpLCBqc29uRGF0YSk7XG4gIH1cbn1cbiJdfQ==