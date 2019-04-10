"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, routerExtensions) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.error = '';
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User();
        this.user.login = "susu";
        this.user.senha = "123456";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LoginComponent.prototype, "invalidLogin", {
        get: function () {
            if (!this.user.login || !this.user.senha) {
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.login || !this.user.senha) {
            this.alert("Insira Login e Senha.");
            return;
        }
        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user.login, this.user.senha)
            .pipe(operators_1.first())
            .subscribe(function (response) {
            if (response.data) {
                _this.routerExtensions.navigate(["/home"], { clearHistory: true });
            }
            else {
                _this.alert(response.erros[0]);
                _this.processing = false;
            }
        }, function (error) {
            _this.error = error;
            dialogs_1.alert(error.error.message);
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.user.senha != this.user.confirmPassword) {
            this.alert("Suas senhas não conferem");
            return;
        }
        this.userService.register(this.user)
            .then(function () {
            _this.processing = false;
            _this.alert("Your account was successfully created.");
            _this.isLoggingIn = true;
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we were unable to create your account.");
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .then(function () {
                    _this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }).catch(function () {
                    _this.alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.focusNome = function () {
        if (!this.isLoggingIn) {
            this.nome.nativeElement.focus();
        }
    };
    LoginComponent.prototype.focusEmail = function () {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    };
    LoginComponent.prototype.focusCpf = function () {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "Sandubas Brasil",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "confirmPassword", void 0);
    __decorate([
        core_1.ViewChild("nome"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "nome", void 0);
    __decorate([
        core_1.ViewChild("email"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("cpf"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "cpf", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            user_service_1.UserService,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELDRDQUF1QztBQUV2QyxtREFBNEM7QUFDNUMsdURBQXFEO0FBUXJEO0lBV0ksd0JBQ1ksSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUZsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJ0QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFZZixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLHNCQUFJLHdDQUFZO2FBQWhCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RDLE9BQVE7YUFDWDtRQUNMLENBQUM7OztPQUFBO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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REFBQztJQUNwQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTSxpQkFBVTsrQ0FBQztJQVR6QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQWFvQixXQUFJO1lBQ0csMEJBQVc7WUFDTix5QkFBZ0I7T0FkckMsY0FBYyxDQXVJMUI7SUFBRCxxQkFBQztDQUFBLEFBdklELElBdUlDO0FBdklZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBlcnJvciA9ICcnO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIikgY29uZmlybVBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcIm5vbWVcIikgbm9tZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjcGZcIikgY3BmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5sb2dpbiA9IFwic3VzdVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5zZW5oYSA9IFwiMTIzNDU2XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXt9XHJcblxyXG4gICAgZ2V0IGludmFsaWRMb2dpbigpOiBib29sZWFue1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmxvZ2luIHx8ICF0aGlzLnVzZXIuc2VuaGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47IFxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlci5sb2dpbiB8fCAhdGhpcy51c2VyLnNlbmhhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJJbnNpcmEgTG9naW4gZSBTZW5oYS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIubG9naW4sIHRoaXMudXNlci5zZW5oYSlcclxuICAgICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuZXJyb3NbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIuc2VuaGEgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiU3VhcyBzZW5oYXMgbsOjbyBjb25mZXJlbVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBBUFAgTkFNRSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNOb21lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLm5vbWUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvY3VzRW1haWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvY3VzQ3BmKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2FuZHViYXMgQnJhc2lsXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==