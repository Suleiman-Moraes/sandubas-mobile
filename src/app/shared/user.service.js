"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sandubas_api_1 = require("./sandubas.api");
var operators_1 = require("rxjs/operators");
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
var core_1 = require("@angular/core");
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
        // return Kinvey.User.resetPassword(email)
        //     .catch(this.handleErrors);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQWtEO0FBQ2xELDRDQUFpRDtBQUNqRCx5SEFBeUg7QUFDekgsNkVBQTZFO0FBRTdFLHNDQUEyQztBQUUzQyw2Q0FBa0Q7QUFDbEQsa0VBQTBEO0FBQzFELG1EQUFpRDtBQUdqRDtJQUdJLHFCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM5QyxlQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN2QyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLEtBQWE7UUFBbEMsaUJBY0M7UUFiRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLCtCQUFnQixlQUFVLEtBQUssZUFBVSxLQUFPLENBQUM7YUFDN0UsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUk7WUFDWiwwREFBMEQ7WUFDMUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFDRztnQkFDRixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osc0RBQXNEO1FBQ3RELGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDZiwwQ0FBMEM7UUFDMUMsaUNBQWlDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVTLHdDQUFrQixHQUE1QixVQUE2QixRQUFhO1FBQ3RDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdDQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBaERRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLUyxpQkFBVTtPQUpuQixXQUFXLENBaUR2QjtJQUFELGtCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTQU5EVV9VU0VSX0xPR0lOIH0gZnJvbSAnLi9zYW5kdWJhcy5hcGknO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cclxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSAnLi9tb2RlbHMvUmVzcG9uc2UtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJy4vc2hhcmVkLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAgIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlID0gU2hhcmVkU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoU0FORFVfVVNFUl9MT0dJTiwgdXNlcikucGlwZShcclxuICAgICAgICAgICAgbWFwKHRoaXMuanNvbkRhdGFUb1Jlc291cmNlLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihsb2dpbjogc3RyaW5nLCBzZW5oYTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHtTQU5EVV9VU0VSX0xPR0lOfT9sb2dpbj0ke2xvZ2lufSZzZW5oYT0ke3NlbmhhfWApXHJcbiAgICAgICAgLnBpcGUobWFwKHVzZXIgPT4ge1xyXG4gICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UudXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvLyByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlLnVzZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgICAgICAvLyByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcclxuICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQganNvbkRhdGFUb1Jlc291cmNlKGpzb25EYXRhOiBhbnkpOiBSZXNwb25zZUFwaSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJlc3BvbnNlQXBpKCksIGpzb25EYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=