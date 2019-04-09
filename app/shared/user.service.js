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
        return kinvey_nativescript_sdk_1.Kinvey.User.signup({ username: user.email, password: user.password })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQWtEO0FBQ2xELDRDQUFxQztBQUNyQyx5SEFBeUg7QUFDekgsNkVBQTZFO0FBRTdFLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFFakQsNkNBQWtEO0FBR2xEO0lBRUkscUJBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMxQixDQUFDO0lBRUgsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLEtBQWEsRUFBRSxLQUFhO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsK0JBQWdCLGVBQVUsS0FBSyxlQUFVLEtBQU8sQ0FBQzthQUM3RSxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSTtZQUNaLDBEQUEwRDtZQUMxRCxJQUFJLElBQUksRUFBRTtnQkFDUixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUNHO2dCQUNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osc0RBQXNEO1FBQ3RELGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF2Q1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlTLGlCQUFVO09BSG5CLFdBQVcsQ0F3Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNBTkRVX1VTRVJfTE9HSU4gfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICApe31cblxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBsb2dpbihsb2dpbjogc3RyaW5nLCBzZW5oYTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7U0FORFVfVVNFUl9MT0dJTn0/bG9naW49JHtsb2dpbn0mc2VuaGE9JHtzZW5oYX1gKVxuICAgICAgICAucGlwZShtYXAodXNlciA9PiB7XG4gICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICAvLyByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBLaW52ZXkuQmFzZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59XG4iXX0=