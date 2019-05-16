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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2Fkb3JpYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVyY2Fkb3JpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGtFQUEwRDtBQUMxRCw0Q0FBaUQ7QUFDakQsNkJBQThDO0FBQzlDLDZDQUFrRDtBQUNsRCwrQ0FBa0Q7QUFLbEQ7SUFFRSwyQkFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hCLENBQUM7SUFFSCw0Q0FBZ0IsR0FBaEIsVUFBaUIsZUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3BELGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcsK0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQzlDLGVBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLCtDQUFtQixHQUEzQixVQUE0QixRQUFhO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdDQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBM0JVLGlCQUFpQjtRQUg3QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FJZ0IsaUJBQVU7T0FIZixpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnLi9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNBTkRVX01FUkNBRE9SSUEgfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXJjYWRvcmlhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKXt9XHJcblxyXG4gIGVudmlhckZvcm11bGFyaW8oY2FkYXN0cm9FbXByZXNhOiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlQXBpPntcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtudWxsfWAsIGNhZGFzdHJvRW1wcmVzYSkucGlwZShcclxuICAgICAgbWFwKHRoaXMuZnJvbUpzb25SZXNwb25zZUFwaS5iaW5kKHRoaXMpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZpbmRBbGwoKTogT2JzZXJ2YWJsZTxSZXNwb25zZUFwaT57XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtTQU5EVV9NRVJDQURPUklBfWApLnBpcGUoXHJcbiAgICAgIG1hcCh0aGlzLmZyb21Kc29uUmVzcG9uc2VBcGkuYmluZCh0aGlzKSksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJFUlJPIE5BIFJFUVVJU0nDh8ODTyA9PiBcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmcm9tSnNvblJlc3BvbnNlQXBpKGpzb25EYXRhOiBhbnkpOiBSZXNwb25zZUFwaXtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBSZXNwb25zZUFwaSgpLCBqc29uRGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==