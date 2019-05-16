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
    MercadoriaService.prototype.findById = function (id) {
        return this.http.get(sandubas_api_1.SANDU_MERCADORIA + "/" + id).pipe(operators_1.map(this.fromJsonResponseApi.bind(this)), operators_1.catchError(this.handleError));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2Fkb3JpYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVyY2Fkb3JpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGtFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQThDO0FBQzlDLDZDQUFrRDtBQUNsRCwrQ0FBa0Q7QUFLbEQ7SUFFRSwyQkFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hCLENBQUM7SUFFSCw0Q0FBZ0IsR0FBaEIsVUFBaUIsZUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3BELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUdDLG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcsK0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQzlDLGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxFQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksK0JBQWdCLFNBQUksRUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwRCxlQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN4QyxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFDSyx1Q0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTywrQ0FBbUIsR0FBM0IsVUFBNEIsUUFBYTtRQUN2QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxnQ0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQWxDVSxpQkFBaUI7UUFIN0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSWdCLGlCQUFVO09BSGYsaUJBQWlCLENBbUM3QjtJQUFELHdCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tICcuL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWwnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNBTkRVX01FUkNBRE9SSUEgfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNhZG9yaWFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKXt9XG5cbiAgZW52aWFyRm9ybXVsYXJpbyhjYWRhc3Ryb0VtcHJlc2E6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtudWxsfWAsIGNhZGFzdHJvRW1wcmVzYSkucGlwZShcbiAgICAgIG1hcCh0aGlzLmZyb21Kc29uUmVzcG9uc2VBcGkuYmluZCh0aGlzKSksXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgKTtcbiAgfVxuXG5cbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7U0FORFVfTUVSQ0FET1JJQX1gKS5waXBlKFxuICAgICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICAgIH1cblxuICAgIGZpbmRCeUlkKGlkOm51bWJlcik6IE9ic2VydmFibGU8UmVzcG9uc2VBcGk+e1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7U0FORFVfTUVSQ0FET1JJQX0vJHtpZH1gKS5waXBlKFxuICAgICAgICBtYXAodGhpcy5mcm9tSnNvblJlc3BvbnNlQXBpLmJpbmQodGhpcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICAgIH1cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVSUk8gTkEgUkVRVUlTScOHw4NPID0+IFwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBmcm9tSnNvblJlc3BvbnNlQXBpKGpzb25EYXRhOiBhbnkpOiBSZXNwb25zZUFwaXtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUmVzcG9uc2VBcGkoKSwganNvbkRhdGEpO1xuICB9XG59XG4iXX0=