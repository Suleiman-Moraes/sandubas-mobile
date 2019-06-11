import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResponseApi } from './models/Response-api.model';
import { map, catchError } from 'rxjs/operators';
import { SANDU_PEDIDO, SANDU_PEDIDO_GETPEDIDO, SANDU_PEDIDO_ADICIONAR, SANDU_PEDIDO_USER } from './sandubas.api';
import { Pedido } from './models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient
  ) { }

  post(pedido: Pedido): Observable<ResponseApi> {
    return this.http.post(`${SANDU_PEDIDO}`, pedido).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }

  getPedido(userId: number): Observable<ResponseApi> {
    return this.http.get(`${SANDU_PEDIDO_GETPEDIDO}/${userId}`).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }

  adicionar(pedido: Pedido): Observable<ResponseApi> {
    return this.http.put(`${SANDU_PEDIDO_ADICIONAR}`, pedido).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }

  removerDetalhe(userId, id): Observable<ResponseApi> {
    return this.http.get(`${SANDU_PEDIDO_USER}/${userId}/remover?id=${id}`).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

  private fromJsonResponseApi(jsonData: any): ResponseApi {
    return Object.assign(new ResponseApi(), jsonData);
  }
}
