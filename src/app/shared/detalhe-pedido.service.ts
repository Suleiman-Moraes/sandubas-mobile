import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalhePedido } from './models/detalhe-pedido.model';
import { ResponseApi } from './models/Response-api.model';
import { Observable, throwError } from 'rxjs';
import { SANDU_DETALHEPEDIDO } from './sandubas.api';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetalhePedidoService {

  constructor(
      private http:HttpClient
  ) { }
  post(detalhe:DetalhePedido):Observable<ResponseApi>{
    return this.http.post(`${SANDU_DETALHEPEDIDO}`,detalhe).pipe(
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
