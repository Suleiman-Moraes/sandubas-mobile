"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Response_api_model_1 = require("./models/Response-api.model");
var rxjs_1 = require("rxjs");
var sandubas_api_1 = require("./sandubas.api");
var operators_1 = require("rxjs/operators");
var DetalhePedidoService = /** @class */ (function () {
    function DetalhePedidoService(http) {
        this.http = http;
    }
    DetalhePedidoService.prototype.post = function (detalhe) {
        return this.http.post("" + sandubas_api_1.SANDU_DETALHEPEDIDO, detalhe).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    DetalhePedidoService.prototype.handleError = function (error) {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return rxjs_1.throwError(error);
    };
    DetalhePedidoService.prototype.fromJsonResponseApi = function (jsonData) {
        return Object.assign(new Response_api_model_1.ResponseApi(), jsonData);
    };
    DetalhePedidoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DetalhePedidoService);
    return DetalhePedidoService;
}());
exports.DetalhePedidoService = DetalhePedidoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1wZWRpZG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFsaGUtcGVkaWRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELGtFQUEwRDtBQUMxRCw2QkFBOEM7QUFDOUMsK0NBQXFEO0FBQ3JELDRDQUFpRDtBQUtqRDtJQUVFLDhCQUNZLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQ3ZCLENBQUM7SUFDTCxtQ0FBSSxHQUFKLFVBQUssT0FBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLGtDQUFxQixFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDeEQsZUFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDO0lBQ08sMENBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sa0RBQW1CLEdBQTNCLFVBQTRCLFFBQWE7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0NBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFsQlUsb0JBQW9CO1FBSGhDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUlpQixpQkFBVTtPQUhoQixvQkFBb0IsQ0FtQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERldGFsaGVQZWRpZG8gfSBmcm9tICcuL21vZGVscy9kZXRhbGhlLXBlZGlkby5tb2RlbCc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnLi9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTQU5EVV9ERVRBTEhFUEVESURPIH0gZnJvbSAnLi9zYW5kdWJhcy5hcGknO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhbGhlUGVkaWRvU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIGh0dHA6SHR0cENsaWVudFxyXG4gICkgeyB9XHJcbiAgcG9zdChkZXRhbGhlOkRldGFsaGVQZWRpZG8pOk9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke1NBTkRVX0RFVEFMSEVQRURJRE99YCxkZXRhbGhlKS5waXBlKFxyXG4gICAgICAgIG1hcCh0aGlzLmZyb21Kc29uUmVzcG9uc2VBcGkuYmluZCh0aGlzKSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRVJSTyBOQSBSRVFVSVNJw4fDg08gPT4gXCIsIGVycm9yKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZnJvbUpzb25SZXNwb25zZUFwaShqc29uRGF0YTogYW55KTogUmVzcG9uc2VBcGl7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUmVzcG9uc2VBcGkoKSwganNvbkRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=