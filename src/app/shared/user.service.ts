import { SANDU_USER_LOGIN } from './sandubas.api';
import { map, catchError } from 'rxjs/operators';
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { ResponseApi } from './models/Response-api.model';
import { SharedService } from './shared.service';

@Injectable()
export class UserService {

    sharedService: SharedService;
    constructor(
        private http: HttpClient
    ){
        this.sharedService = SharedService.getInstance();
    }

    register(user: User) {
        return this.http.post(SANDU_USER_LOGIN, user).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleErrors)
        )
    }

    login(login: string, senha: string) {
        return this.http.get<any>(`${SANDU_USER_LOGIN}?login=${login}&senha=${senha}`)
        .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            return user;
          }
          else{
            this.sharedService.user = null;
            return null;
          }
        }));
        // return Kinvey.User.login(user.email, user.password)
        //     .catch(this.handleErrors);
    }

    logout() {
        this.sharedService.user = null;
    }

    resetPassword(email) {
        return Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Kinvey.BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }

    protected jsonDataToResource(jsonData: any): ResponseApi {
        return Object.assign(new ResponseApi(), jsonData);
    }
}
