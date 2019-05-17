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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxoZS1wZWRpZG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFsaGUtcGVkaWRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELGtFQUEwRDtBQUMxRCw2QkFBOEM7QUFDOUMsK0NBQXFEO0FBQ3JELDRDQUFpRDtBQUtqRDtJQUVFLDhCQUNZLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQ3ZCLENBQUM7SUFDTCxtQ0FBSSxHQUFKLFVBQUssT0FBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLGtDQUFxQixFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDeEQsZUFBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDeEMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQy9CLENBQUM7SUFDSixDQUFDO0lBQ08sMENBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sa0RBQW1CLEdBQTNCLFVBQTRCLFFBQWE7UUFDdkMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0NBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFsQlUsb0JBQW9CO1FBSGhDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUlpQixpQkFBVTtPQUhoQixvQkFBb0IsQ0FtQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGV0YWxoZVBlZGlkbyB9IGZyb20gJy4vbW9kZWxzL2RldGFsaGUtcGVkaWRvLm1vZGVsJztcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnLi9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNBTkRVX0RFVEFMSEVQRURJRE8gfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERldGFsaGVQZWRpZG9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50XG4gICkgeyB9XG4gIHBvc3QoZGV0YWxoZTpEZXRhbGhlUGVkaWRvKTpPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7U0FORFVfREVUQUxIRVBFRElET31gLGRldGFsaGUpLnBpcGUoXG4gICAgICAgIG1hcCh0aGlzLmZyb21Kc29uUmVzcG9uc2VBcGkuYmluZCh0aGlzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICApO1xuICB9XG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJFUlJPIE5BIFJFUVVJU0nDh8ODTyA9PiBcIiwgZXJyb3IpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbUpzb25SZXNwb25zZUFwaShqc29uRGF0YTogYW55KTogUmVzcG9uc2VBcGl7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcbiAgfVxufVxuIl19