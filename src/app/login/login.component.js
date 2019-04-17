"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var shared_service_1 = require("../shared/shared.service");
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
        this.user.login = "xx";
        this.user.senha = "123456";
        this.sharedService = shared_service_1.SharedService.getInstance();
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
                _this.sharedService.user = response.data;
                _this.routerExtensions.navigate(["/principal"], { clearHistory: true });
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
        if (this.validFormNovoUser()) {
            this.userService.register(this.user).subscribe(function (responseApi) {
                if (responseApi != null) {
                    if (responseApi.data != null) {
                        _this.alert('usuário cadastrado com sucesso!');
                        _this.toggleForm();
                    }
                    else {
                        responseApi.erros.forEach(function (x) {
                            _this.alert(x);
                        });
                    }
                }
                else {
                    _this.alert('Ocorreu um erro inesperado, tente novamente mais tarde.');
                    _this.toggleForm();
                }
            });
        }
        this.processing = false;
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
    LoginComponent.prototype.validFormNovoUser = function () {
        if (this.stringNullOrEmpty(this.user.login)) {
            this.alert('Login deve ser preenchido');
            return false;
        }
        if (this.stringNullOrEmpty(this.user.senha)) {
            this.alert('Senha deve ser preenchido');
            return false;
        }
        if (this.stringNullOrEmpty(this.user.confirmPassword)) {
            this.alert('Confirmar senha deve ser preenchido');
            return false;
        }
        if (this.user.senha != this.user.confirmPassword) {
            this.alert("Suas senhas não conferem");
            return false;
        }
        if (this.stringNullOrEmpty(this.user.nome)) {
            this.alert('Nome deve ser preenchido');
            return false;
        }
        if (this.stringNullOrEmpty(this.user.email)) {
            this.alert('E-mail deve ser preenchido');
            return false;
        }
        if (this.stringNullOrEmpty(this.user.cpf)) {
            this.alert('CPF deve ser preenchido');
            return false;
        }
        return true;
    };
    LoginComponent.prototype.stringNotNullOrEmpty = function (texto) {
        return texto != null && texto.trim() != '';
    };
    LoginComponent.prototype.stringNullOrEmpty = function (texto) {
        return !this.stringNotNullOrEmpty(texto);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELDRDQUFrRDtBQUVsRCxtREFBNEM7QUFDNUMsdURBQXFEO0FBQ3JELDJEQUF5RDtBQVN6RDtJQVlJLHdCQUNZLElBQVUsRUFDVixXQUF3QixFQUN4QixnQkFBa0M7UUFGbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBYWYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosc0JBQUksd0NBQVk7YUFBaEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEMsT0FBUTthQUNYO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENB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IE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZpcnN0LCB0aW1lc3RhbXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VBcGkgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIGVycm9yID0gJyc7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIikgY29uZmlybVBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcIm5vbWVcIikgbm9tZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjcGZcIikgY3BmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5sb2dpbiA9IFwieHhcIjtcclxuICAgICAgICB0aGlzLnVzZXIuc2VuaGEgPSBcIjEyMzQ1NlwiO1xyXG4gICAgICAgIHRoaXMuc2hhcmVkU2VydmljZSA9IFNoYXJlZFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe31cclxuXHJcbiAgICBnZXQgaW52YWxpZExvZ2luKCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIubG9naW4gfHwgIXRoaXMudXNlci5zZW5oYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjsgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmxvZ2luIHx8ICF0aGlzLnVzZXIuc2VuaGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIkluc2lyYSBMb2dpbiBlIFNlbmhhLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlci5sb2dpbiwgdGhpcy51c2VyLnNlbmhhKVxyXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlLnVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJpbmNpcGFsXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5lcnJvc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy52YWxpZEZvcm1Ob3ZvVXNlcigpKXtcclxuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcG9uc2VBcGk6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaS5kYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCd1c3XDoXJpbyBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGkuZXJyb3MuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnT2NvcnJldSB1bSBlcnJvIGluZXNwZXJhZG8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEFQUCBOQU1FIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb2N1c05vbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9tZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNFbWFpbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNDcGYoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYW5kdWJhcyBCcmFzaWxcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkRm9ybU5vdm9Vc2VyKCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIubG9naW4pKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnTG9naW4gZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLnNlbmhhKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ1NlbmhhIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnQ29uZmlybWFyIHNlbmhhIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51c2VyLnNlbmhhICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlN1YXMgc2VuaGFzIG7Do28gY29uZmVyZW1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIubm9tZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdOb21lIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5lbWFpbCkpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdFLW1haWwgZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLmNwZikpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdDUEYgZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nTm90TnVsbE9yRW1wdHkodGV4dG86IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRleHRvICE9IG51bGwgJiYgdGV4dG8udHJpbSgpICE9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nTnVsbE9yRW1wdHkodGV4dG86IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnN0cmluZ05vdE51bGxPckVtcHR5KHRleHRvKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19