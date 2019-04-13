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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELDRDQUFrRDtBQUVsRCxtREFBNEM7QUFDNUMsdURBQXFEO0FBU3JEO0lBV0ksd0JBQ1ksSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUZsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJ0QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFZZixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLHNCQUFJLHdDQUFZO2FBQWhCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RDLE9BQVE7YUFDWDtRQUNMLENBQUM7OztPQUFBO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLDZDQUFvQixHQUE1QixVQUE2QixLQUFhO1FBQ3RDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTywwQ0FBaUIsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUEvS3NCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBQ2Q7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7MkRBQUM7SUFDdkM7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQU8saUJBQVU7Z0RBQUM7SUFDaEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7aURBQUM7SUFDcEI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7K0NBQUM7SUFUekIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0Fhb0IsV0FBSTtZQUNHLDBCQUFXO1lBQ04seUJBQWdCO09BZHJDLGNBQWMsQ0FxTDFCO0lBQUQscUJBQUM7Q0FBQSxBQXJMRCxJQXFMQztBQXJMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBmaXJzdCwgdGltZXN0YW1wIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVscy9SZXNwb25zZS1hcGkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIGVycm9yID0gJyc7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwibm9tZVwiKSBub21lOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImNwZlwiKSBjcGY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmxvZ2luID0gXCJzdXN1XCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnNlbmhhID0gXCIxMjM0NTZcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe31cclxuXHJcbiAgICBnZXQgaW52YWxpZExvZ2luKCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIubG9naW4gfHwgIXRoaXMudXNlci5zZW5oYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjsgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmxvZ2luIHx8ICF0aGlzLnVzZXIuc2VuaGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIkluc2lyYSBMb2dpbiBlIFNlbmhhLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlci5sb2dpbiwgdGhpcy51c2VyLnNlbmhhKVxyXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5lcnJvc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy52YWxpZEZvcm1Ob3ZvVXNlcigpKXtcclxuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcG9uc2VBcGk6IFJlc3BvbnNlQXBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZUFwaS5kYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCd1c3XDoXJpbyBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGkuZXJyb3MuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnT2NvcnJldSB1bSBlcnJvIGluZXNwZXJhZG8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgcHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEFQUCBOQU1FIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb2N1c05vbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9tZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNFbWFpbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNDcGYoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTYW5kdWJhcyBCcmFzaWxcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkRm9ybU5vdm9Vc2VyKCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIubG9naW4pKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnTG9naW4gZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLnNlbmhhKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ1NlbmhhIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnQ29uZmlybWFyIHNlbmhhIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51c2VyLnNlbmhhICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlN1YXMgc2VuaGFzIG7Do28gY29uZmVyZW1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIubm9tZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdOb21lIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5lbWFpbCkpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdFLW1haWwgZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLmNwZikpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdDUEYgZGV2ZSBzZXIgcHJlZW5jaGlkbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nTm90TnVsbE9yRW1wdHkodGV4dG86IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRleHRvICE9IG51bGwgJiYgdGV4dG8udHJpbSgpICE9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nTnVsbE9yRW1wdHkodGV4dG86IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnN0cmluZ05vdE51bGxPckVtcHR5KHRleHRvKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19