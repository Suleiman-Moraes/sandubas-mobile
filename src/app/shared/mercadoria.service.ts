import { Injectable } from '@angular/core';
import { ResponseApi } from './models/Response-api.model';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SANDU_MERCADORIA } from './sandubas.api';

@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {

  constructor(
    private http: HttpClient
  ){}

  enviarFormulario(cadastroEmpresa: any): Observable<ResponseApi>{
    return this.http.post(`${null}`, cadastroEmpresa).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }


    findAll(): Observable<ResponseApi>{
      return this.http.get(`${SANDU_MERCADORIA}`).pipe(
        map(this.fromJsonResponseApi.bind(this)),
        catchError(this.handleError)
      );
    }

    findById(id:number): Observable<ResponseApi>{
      return this.http.get(`${SANDU_MERCADORIA}/${id}`).pipe(
        map(this.fromJsonResponseApi.bind(this)),
        catchError(this.handleError)
      );
    }
  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

  private fromJsonResponseApi(jsonData: any): ResponseApi{
    return Object.assign(new ResponseApi(), jsonData);
  }
}
