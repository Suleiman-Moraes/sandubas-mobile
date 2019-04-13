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
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(sandubas_api_1.SANDU_USER_LOGIN, user).pipe(operators_1.map(this.jsonDataToResource.bind(this)), operators_1.catchError(this.handleErrors));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQWtEO0FBQ2xELDRDQUFpRDtBQUNqRCx5SEFBeUg7QUFDekgsNkVBQTZFO0FBRTdFLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFFakQsNkNBQWtEO0FBQ2xELGtFQUEwRDtBQUcxRDtJQUVJLHFCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDMUIsQ0FBQztJQUVILDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzlDLGVBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3ZDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ0wsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsS0FBYTtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLCtCQUFnQixlQUFVLEtBQUssZUFBVSxLQUFPLENBQUM7YUFDN0UsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUk7WUFDWiwwREFBMEQ7WUFDMUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFDRztnQkFDRixPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLHNEQUFzRDtRQUN0RCxpQ0FBaUM7SUFDckMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBdUI7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMsd0NBQWtCLEdBQTVCLFVBQTZCLFFBQWE7UUFDdEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0NBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE3Q1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlTLGlCQUFVO09BSG5CLFdBQVcsQ0E4Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNBTkRVX1VTRVJfTE9HSU4gfSBmcm9tICcuL3NhbmR1YmFzLmFwaSc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxyXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnLi9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICl7fVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoU0FORFVfVVNFUl9MT0dJTiwgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKHRoaXMuanNvbkRhdGFUb1Jlc291cmNlLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihsb2dpbjogc3RyaW5nLCBzZW5oYTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHtTQU5EVV9VU0VSX0xPR0lOfT9sb2dpbj0ke2xvZ2lufSZzZW5oYT0ke3NlbmhhfWApXHJcbiAgICAgICAgLnBpcGUobWFwKHVzZXIgPT4ge1xyXG4gICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXHJcbiAgICAgICAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dvdXQoKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQganNvbkRhdGFUb1Jlc291cmNlKGpzb25EYXRhOiBhbnkpOiBSZXNwb25zZUFwaSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=