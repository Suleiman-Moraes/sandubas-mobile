"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sandubas_api_1 = require("./sandubas.api");
var operators_1 = require("rxjs/operators");
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return kinvey_nativescript_sdk_1.Kinvey.User.signup({ username: user.email, password: user.senha })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (login, senha) {
        return this.http.get(sandubas_api_1.SANDU_USER_LOGIN + "?login=" + login + "&senha=" + senha)
            .pipe(operators_1.map(function (user) {
            // login successful if there's a jwt token in the response
            if (user) {
                return user;
            }
            else {
                return null;
            }
        }));
        // return Kinvey.User.login(user.email, user.password)
        //     .catch(this.handleErrors);
    };
    UserService.prototype.logout = function () {
        return kinvey_nativescript_sdk_1.Kinvey.User.logout()
            .catch(this.handleErrors);
    };
    UserService.prototype.resetPassword = function (email) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQWtEO0FBQ2xELDRDQUFxQztBQUNyQyx5SEFBeUg7QUFDekgsNkVBQTZFO0FBRTdFLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFFakQsNkNBQWtEO0FBR2xEO0lBRUkscUJBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMxQixDQUFDO0lBRUgsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLEtBQWEsRUFBRSxLQUFhO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsK0JBQWdCLGVBQVUsS0FBSyxlQUFVLEtBQU8sQ0FBQzthQUM3RSxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSTtZQUNaLDBEQUEwRDtZQUMxRCxJQUFJLElBQUksRUFBRTtnQkFDUixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUNHO2dCQUNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osc0RBQXNEO1FBQ3RELGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF2Q1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlTLGlCQUFVO09BSG5CLFdBQVcsQ0F3Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNBTkRVX1VTRVJfTE9HSU4gfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxyXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApe31cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5zZW5oYSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGxvZ2luOiBzdHJpbmcsIHNlbmhhOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke1NBTkRVX1VTRVJfTE9HSU59P2xvZ2luPSR7bG9naW59JnNlbmhhPSR7c2VuaGF9YClcclxuICAgICAgICAucGlwZShtYXAodXNlciA9PiB7XHJcbiAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvLyByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogS2ludmV5LkJhc2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==