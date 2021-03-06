import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { first, timestamp } from 'rxjs/operators';

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";
import { SharedService } from "../shared/shared.service";
import { ResponseApi } from "../shared/models/Response-api.model";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private error = '';
    isLoggingIn = true;
    user: User;
    processing = false;
    sharedService: SharedService;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    @ViewChild("nome") nome: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("cpf") cpf: ElementRef;

    constructor(
        private page: Page, 
        private userService: UserService, 
        private routerExtensions: RouterExtensions
    ){
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.login = "xx";
        this.user.senha = "123456";
        this.sharedService = SharedService.getInstance();
    }

    ngOnInit(){}

    get invalidLogin(): boolean{
        if (!this.user.login || !this.user.senha) {
            return ;
        }
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn; 
    }

    submit() {
        if (!this.user.login || !this.user.senha) {
            this.alert("Insira Login e Senha.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user.login, this.user.senha)
        .pipe(first())
        .subscribe(
            response => {
                if(response.data){
                    this.sharedService.user = response.data;
                    this.routerExtensions.navigate(["/principal"], { clearHistory: true });
                }
                else{
                    this.alert(response.erros[0]);
                    this.processing = false;
                }
            },
            error => {
                this.error = error;
                alert(error.error.message);
            });
    }

    register() {
        if(this.validFormNovoUser()){
            this.userService.register(this.user).subscribe((responseApi: ResponseApi) => {
                if(responseApi != null){
                    if(responseApi.data != null){
                        this.alert('usuário cadastrado com sucesso!');
                        this.toggleForm();
                    }
                    else{
                        responseApi.erros.forEach(x => {
                            this.alert(x);
                        });
                    }
                }
                else{
                    this.alert('Ocorreu um erro inesperado, tente novamente mais tarde.');
                    this.toggleForm();
                }
            });
        }
        this.processing = false;
    }

    forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                // this.userService.resetPassword(data.text.trim())
                //     .then(() => {
                //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                //     }).catch(() => {
                //         this.alert("Unfortunately, an error occurred resetting your password.");
                //     });
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }
    focusNome() {
        if (!this.isLoggingIn) {
            this.nome.nativeElement.focus();
        }
    }
    focusEmail() {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    }
    focusCpf() {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "Sandubas Brasil",
            okButtonText: "OK",
            message: message
        });
    }

    private validFormNovoUser(): boolean{
        if(this.stringNullOrEmpty(this.user.login)){
            this.alert('Login deve ser preenchido');
            return false;
        }
        if(this.stringNullOrEmpty(this.user.senha)){
            this.alert('Senha deve ser preenchido');
            return false;
        }
        if(this.stringNullOrEmpty(this.user.confirmPassword)){
            this.alert('Confirmar senha deve ser preenchido');
            return false;
        }
        if (this.user.senha != this.user.confirmPassword) {
            this.alert("Suas senhas não conferem");
            return false;
        }
        if(this.stringNullOrEmpty(this.user.nome)){
            this.alert('Nome deve ser preenchido');
            return false;
        }
        if(this.stringNullOrEmpty(this.user.email)){
            this.alert('E-mail deve ser preenchido');
            return false;
        }
        if(this.stringNullOrEmpty(this.user.cpf)){
            this.alert('CPF deve ser preenchido');
            return false;
        }
        return true;
    }

    private stringNotNullOrEmpty(texto: string): boolean{
        return texto != null && texto.trim() != '';
    }

    private stringNullOrEmpty(texto: string): boolean{
        return !this.stringNotNullOrEmpty(texto);
    }
}

