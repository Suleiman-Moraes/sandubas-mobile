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
    DetalhePedidoService.prototype.adicionar = function (detalhe, userId) {
        return this.http.put(sandubas_api_1.SANDU_DETALHEPEDIDO_ADICIONAR + "/" + userId, detalhe).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1wZWRpZG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFsaGUtcGVkaWRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELGtFQUEwRDtBQUMxRCw2QkFBOEM7QUFDOUMsK0NBQW9GO0FBQ3BGLDRDQUFpRDtBQUtqRDtJQUVFLDhCQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDdEIsQ0FBQztJQUVMLG1DQUFJLEdBQUosVUFBSyxPQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsa0NBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMzRCxlQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN4QyxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsT0FBc0IsRUFBRSxNQUFjO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksNENBQTZCLFNBQUksTUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUUsZUFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRU8sMENBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sa0RBQW1CLEdBQTNCLFVBQTRCLFFBQWE7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0NBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUEzQlUsb0JBQW9CO1FBSGhDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUlnQixpQkFBVTtPQUhmLG9CQUFvQixDQTRCaEM7SUFBRCwyQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRGV0YWxoZVBlZGlkbyB9IGZyb20gJy4vbW9kZWxzL2RldGFsaGUtcGVkaWRvLm1vZGVsJztcclxuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tICcuL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNBTkRVX0RFVEFMSEVQRURJRE8sIFNBTkRVX0RFVEFMSEVQRURJRE9fQURJQ0lPTkFSIH0gZnJvbSAnLi9zYW5kdWJhcy5hcGknO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhbGhlUGVkaWRvU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7IH1cclxuXHJcbiAgcG9zdChkZXRhbGhlOiBEZXRhbGhlUGVkaWRvKTogT2JzZXJ2YWJsZTxSZXNwb25zZUFwaT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke1NBTkRVX0RFVEFMSEVQRURJRE99YCwgZGV0YWxoZSkucGlwZShcclxuICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkaWNpb25hcihkZXRhbGhlOiBEZXRhbGhlUGVkaWRvLCB1c2VySWQ6IG51bWJlcik6IE9ic2VydmFibGU8UmVzcG9uc2VBcGk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke1NBTkRVX0RFVEFMSEVQRURJRE9fQURJQ0lPTkFSfS8ke3VzZXJJZH1gLCBkZXRhbGhlKS5waXBlKFxyXG4gICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRVJSTyBOQSBSRVFVSVNJw4fDg08gPT4gXCIsIGVycm9yKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZnJvbUpzb25SZXNwb25zZUFwaShqc29uRGF0YTogYW55KTogUmVzcG9uc2VBcGkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcclxuICB9XHJcbn1cclxuIl19