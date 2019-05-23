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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVkaWRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZWRpZG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsNkJBQThDO0FBQzlDLGtFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsK0NBQThGO0FBTTlGO0lBRUksdUJBQ1ksSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFDdkIsQ0FBQztJQUNMLDRCQUFJLEdBQUosVUFBSyxNQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRywyQkFBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDaEQsZUFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDO0lBQ0QsaUNBQVMsR0FBVCxVQUFVLE1BQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxxQ0FBc0IsU0FBSSxNQUFRLENBQUMsQ0FBQyxJQUFJLENBQzVELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDO0lBQ04sQ0FBQztJQUNMLGlDQUFTLEdBQVQsVUFBVSxNQUFhO1FBQ25CLElBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxxQ0FBd0IsRUFBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDO0lBQ04sQ0FBQztJQUNPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLDJDQUFtQixHQUEzQixVQUE0QixRQUFhO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdDQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbENRLGFBQWE7UUFIekIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSW1CLGlCQUFVO09BSGxCLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbCc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU0FORFVfUEVESURPLCBTQU5EVV9QRURJRE9fR0VUUEVESURPLCBTQU5EVV9QRURJRE9fQURJQ0lPTkFSIH0gZnJvbSAnLi9zYW5kdWJhcy5hcGknO1xyXG5pbXBvcnQgeyBQZWRpZG8gfSBmcm9tICcuL21vZGVscy9wZWRpZG8ubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVkaWRvU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOkh0dHBDbGllbnRcclxuICAgICkgeyB9XHJcbiAgICBwb3N0KHBlZGlkbzpQZWRpZG8pOk9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7U0FORFVfUEVESURPfWAscGVkaWRvKS5waXBlKFxyXG4gICAgICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldFBlZGlkbyh1c2VySWQ6bnVtYmVyKTpPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtTQU5EVV9QRURJRE9fR0VUUEVESURPfS8ke3VzZXJJZH1gKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgYWRpY2lvbmFyKHBlZGlkbzpQZWRpZG8pOk9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xyXG4gICAgICAgIGlmKHBlZGlkby5pZCA9PSBudWxsICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydCgnYWRpY2lvbmFyIHRlc3RlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7U0FORFVfUEVESURPX0FESUNJT05BUn1gLHBlZGlkbykucGlwZShcclxuICAgICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPIE5BIFJFUVVJU0nDh8ODTyA9PiBcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcm9tSnNvblJlc3BvbnNlQXBpKGpzb25EYXRhOiBhbnkpOiBSZXNwb25zZUFwaXtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=