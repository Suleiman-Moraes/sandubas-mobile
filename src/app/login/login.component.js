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
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                // this.userService.resetPassword(data.text.trim())
                //     .then(() => {
                //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                //     }).catch(() => {
                //         this.alert("Unfortunately, an error occurred resetting your password.");
                //     });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELDRDQUFrRDtBQUVsRCxtREFBNEM7QUFDNUMsdURBQXFEO0FBQ3JELDJEQUF5RDtBQVN6RDtJQVlJLHdCQUNZLElBQVUsRUFDVixXQUF3QixFQUN4QixnQkFBa0M7UUFGbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBYWYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosc0JBQUksd0NBQVk7YUFBaEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEMsT0FBUTthQUNYO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENB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VUFBNkIsS0FBYTtRQUN0QyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU8sMENBQWlCLEdBQXpCLFVBQTBCLEtBQWE7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBakxzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQUNkO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzJEQUFDO0lBQ3ZDO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFPLGlCQUFVO2dEQUFDO0lBQ2hCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2lEQUFDO0lBQ3BCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFNLGlCQUFVOytDQUFDO0lBVnpCLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBY29CLFdBQUk7WUFDRywwQkFBVztZQUNOLHlCQUFnQjtPQWZyQyxjQUFjLENBd0wxQjtJQUFELHFCQUFDO0NBQUEsQUF4TEQsSUF3TEM7QUF4TFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZmlyc3QsIHRpbWVzdGFtcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaSB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL1Jlc3BvbnNlLWFwaS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZXJyb3IgPSAnJztcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlO1xyXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwibm9tZVwiKSBub21lOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImNwZlwiKSBjcGY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmxvZ2luID0gXCJ4eFwiO1xyXG4gICAgICAgIHRoaXMudXNlci5zZW5oYSA9IFwiMTIzNDU2XCI7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlID0gU2hhcmVkU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7fVxyXG5cclxuICAgIGdldCBpbnZhbGlkTG9naW4oKTogYm9vbGVhbntcclxuICAgICAgICBpZiAoIXRoaXMudXNlci5sb2dpbiB8fCAhdGhpcy51c2VyLnNlbmhhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luOyBcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIubG9naW4gfHwgIXRoaXMudXNlci5zZW5oYSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiSW5zaXJhIExvZ2luIGUgU2VuaGEuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyLmxvZ2luLCB0aGlzLnVzZXIuc2VuaGEpXHJcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZFNlcnZpY2UudXNlciA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcmluY2lwYWxcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLmVycm9zWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMudmFsaWRGb3JtTm92b1VzZXIoKSl7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoKHJlc3BvbnNlQXBpOiBSZXNwb25zZUFwaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VBcGkgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2VBcGkuZGF0YSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCgndXN1w6FyaW8gY2FkYXN0cmFkbyBjb20gc3VjZXNzbyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpLmVycm9zLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBpbmVzcGVyYWRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBBUFAgTkFNRSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNOb21lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLm5vbWUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvY3VzRW1haWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvY3VzQ3BmKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2FuZHViYXMgQnJhc2lsXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZEZvcm1Ob3ZvVXNlcigpOiBib29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLmxvZ2luKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ0xvZ2luIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5zZW5oYSkpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdTZW5oYSBkZXZlIHNlciBwcmVlbmNoaWRvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ0NvbmZpcm1hciBzZW5oYSBkZXZlIHNlciBwcmVlbmNoaWRvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudXNlci5zZW5oYSAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJTdWFzIHNlbmhhcyBuw6NvIGNvbmZlcmVtXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3RyaW5nTnVsbE9yRW1wdHkodGhpcy51c2VyLm5vbWUpKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnTm9tZSBkZXZlIHNlciBwcmVlbmNoaWRvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdHJpbmdOdWxsT3JFbXB0eSh0aGlzLnVzZXIuZW1haWwpKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnRS1tYWlsIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0cmluZ051bGxPckVtcHR5KHRoaXMudXNlci5jcGYpKXtcclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnQ1BGIGRldmUgc2VyIHByZWVuY2hpZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0cmluZ05vdE51bGxPckVtcHR5KHRleHRvOiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0ZXh0byAhPSBudWxsICYmIHRleHRvLnRyaW0oKSAhPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0cmluZ051bGxPckVtcHR5KHRleHRvOiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zdHJpbmdOb3ROdWxsT3JFbXB0eSh0ZXh0byk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==