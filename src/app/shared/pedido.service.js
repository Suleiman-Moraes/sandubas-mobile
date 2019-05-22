"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var Response_api_model_1 = require("./models/Response-api.model");
var operators_1 = require("rxjs/operators");
var sandubas_api_1 = require("./sandubas.api");
var PedidoService = /** @class */ (function () {
    function PedidoService(http) {
        this.http = http;
    }
    PedidoService.prototype.post = function (pedido) {
        return this.http.post("" + sandubas_api_1.SANDU_PEDIDO, pedido).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    PedidoService.prototype.getPedido = function (userId) {
        return this.http.get(sandubas_api_1.SANDU_PEDIDO_GETPEDIDO + "/" + userId).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    PedidoService.prototype.adicionar = function (pedido) {
        if (pedido.id == null) {
            return null;
        }
        alert('adicionar teste');
        return this.http.put("" + sandubas_api_1.SANDU_PEDIDO_ADICIONAR, pedido).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
    };
    PedidoService.prototype.handleError = function (error) {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return rxjs_1.throwError(error);
    };
    PedidoService.prototype.fromJsonResponseApi = function (jsonData) {
        return Object.assign(new Response_api_model_1.ResponseApi(), jsonData);
    };
    PedidoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PedidoService);
    return PedidoService;
}());
exports.PedidoService = PedidoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZWRpZG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsNkJBQThDO0FBQzlDLGtFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsK0NBQThGO0FBTTlGO0lBRUksdUJBQ1ksSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFDdkIsQ0FBQztJQUNMLDRCQUFJLEdBQUosVUFBSyxNQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRywyQkFBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDaEQsZUFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDO0lBQ0QsaUNBQVMsR0FBVCxVQUFVLE1BQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxxQ0FBc0IsU0FBSSxNQUFRLENBQUMsQ0FBQyxJQUFJLENBQzVELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDO0lBQ04sQ0FBQztJQUNMLGlDQUFTLEdBQVQsVUFBVSxNQUFhO1FBQ25CLElBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxxQ0FBd0IsRUFBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDO0lBQ04sQ0FBQztJQUNPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLDJDQUFtQixHQUEzQixVQUE0QixRQUFhO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdDQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbENRLGFBQWE7UUFIekIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSW1CLGlCQUFVO09BSGxCLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbCc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTQU5EVV9QRURJRE8sIFNBTkRVX1BFRElET19HRVRQRURJRE8sIFNBTkRVX1BFRElET19BRElDSU9OQVIgfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XG5pbXBvcnQgeyBQZWRpZG8gfSBmcm9tICcuL21vZGVscy9wZWRpZG8ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQZWRpZG9TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6SHR0cENsaWVudFxuICAgICkgeyB9XG4gICAgcG9zdChwZWRpZG86UGVkaWRvKTpPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtTQU5EVV9QRURJRE99YCxwZWRpZG8pLnBpcGUoXG4gICAgICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICAgIH1cbiAgICBnZXRQZWRpZG8odXNlcklkOm51bWJlcik6T2JzZXJ2YWJsZTxSZXNwb25zZUFwaT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke1NBTkRVX1BFRElET19HRVRQRURJRE99LyR7dXNlcklkfWApLnBpcGUoXG4gICAgICAgICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIGFkaWNpb25hcihwZWRpZG86UGVkaWRvKTpPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcbiAgICAgICAgaWYocGVkaWRvLmlkID09IG51bGwgKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0KCdhZGljaW9uYXIgdGVzdGUnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7U0FORFVfUEVESURPX0FESUNJT05BUn1gLHBlZGlkbykucGlwZShcbiAgICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPIE5BIFJFUVVJU0nDh8ODTyA9PiBcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZnJvbUpzb25SZXNwb25zZUFwaShqc29uRGF0YTogYW55KTogUmVzcG9uc2VBcGl7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUmVzcG9uc2VBcGkoKSwganNvbkRhdGEpO1xuICAgIH1cbn1cbiJdfQ==