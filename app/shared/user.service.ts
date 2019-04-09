import { SANDU_USER_LOGIN } from './sandubas.api';
import { map } from 'rxjs/operators';
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ){}

    register(user: User) {
        return Kinvey.User.signup({ username: user.email, password: user.password })
            .catch(this.handleErrors);
    }

    login(login: string, senha: string) {
        return this.http.get<any>(`${SANDU_USER_LOGIN}?login=${login}&senha=${senha}`)
        .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            return user;
          }
          else{
            return null;
          }
        }));
        // return Kinvey.User.login(user.email, user.password)
        //     .catch(this.handleErrors);
    }

    logout() {
        return Kinvey.User.logout()
            .catch(this.handleErrors);
    }

    resetPassword(email) {
        return Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Kinvey.BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}
