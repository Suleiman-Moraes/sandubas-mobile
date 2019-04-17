"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sandubas_api_1 = require("./sandubas.api");
var operators_1 = require("rxjs/operators");
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var http_1 = require("@angular/common/http");
var Response_api_model_1 = require("./models/Response-api.model");
var shared_service_1 = require("./shared.service");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.sharedService = shared_service_1.SharedService.getInstance();
    }
    UserService.prototype.register = function (user) {
        return this.http.post(sandubas_api_1.SANDU_USER_LOGIN, user).pipe(operators_1.map(this.jsonDataToResource.bind(this)), operators_1.catchError(this.handleErrors));
    };
    UserService.prototype.login = function (login, senha) {
        var _this = this;
        return this.http.get(sandubas_api_1.SANDU_USER_LOGIN + "?login=" + login + "&senha=" + senha)
            .pipe(operators_1.map(function (user) {
            // login successful if there's a jwt token in the response
            if (user) {
                return user;
            }
            else {
                _this.sharedService.user = null;
                return null;
            }
        }));
        // return Kinvey.User.login(user.email, user.password)
        //     .catch(this.handleErrors);
    };
    UserService.prototype.logout = function () {
        this.sharedService.user = null;
    };
    UserService.prototype.resetPassword = function (email) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserService.prototype.jsonDataToResource = function (jsonData) {
        return Object.assign(new Response_api_model_1.ResponseApi(), jsonData);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQWtEO0FBQ2xELDRDQUFpRDtBQUNqRCx5SEFBeUg7QUFDekgsNkVBQTZFO0FBRTdFLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFFakQsNkNBQWtEO0FBQ2xELGtFQUEwRDtBQUMxRCxtREFBaUQ7QUFHakQ7SUFHSSxxQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXhCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDOUMsZUFBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDdkMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUE7SUFDTCxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLEtBQWEsRUFBRSxLQUFhO1FBQWxDLGlCQWNDO1FBYkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUywrQkFBZ0IsZUFBVSxLQUFLLGVBQVUsS0FBTyxDQUFDO2FBQzdFLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1osMERBQTBEO1lBQzFELElBQUksSUFBSSxFQUFFO2dCQUNSLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0c7Z0JBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLHNEQUFzRDtRQUN0RCxpQ0FBaUM7SUFDckMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFUyx3Q0FBa0IsR0FBNUIsVUFBNkIsUUFBYTtRQUN0QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxnQ0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQWhEUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS1MsaUJBQVU7T0FKbkIsV0FBVyxDQWlEdkI7SUFBRCxrQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0FORFVfVVNFUl9MT0dJTiB9IGZyb20gJy4vc2FuZHViYXMuYXBpJztcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXHJcbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tICcuL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWwnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gICAgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UgPSBTaGFyZWRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChTQU5EVV9VU0VSX0xPR0lOLCB1c2VyKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAodGhpcy5qc29uRGF0YVRvUmVzb3VyY2UuYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGxvZ2luOiBzdHJpbmcsIHNlbmhhOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke1NBTkRVX1VTRVJfTE9HSU59P2xvZ2luPSR7bG9naW59JnNlbmhhPSR7c2VuaGF9YClcclxuICAgICAgICAucGlwZShtYXAodXNlciA9PiB7XHJcbiAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkU2VydmljZS51c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIC8vIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UudXNlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogS2ludmV5LkJhc2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBqc29uRGF0YVRvUmVzb3VyY2UoanNvbkRhdGE6IGFueSk6IFJlc3BvbnNlQXBpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUmVzcG9uc2VBcGkoKSwganNvbkRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==