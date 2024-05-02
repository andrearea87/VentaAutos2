import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Respuesta } from './Vehiculo.service';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
};  
baseUrl="https://epico.gob.ec/vehiculo/public/api/";

constructor(private http: HttpClient) { }

//Obtener listado de clientes
getClientes(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{ 
  let body = new HttpParams();
  body=filtro?body.set('filtro',filtro):body;
  body=rows?body.set('rows',rows):body;
  body=page?body.set('page',page):body;
  /*return this.http.get<Respuesta>(this.baseUrl+"clientes/", {params:body}).pipe(
    map(respuesta => respuesta.data)
  ); */
  return this.http.get<Respuesta>(this.baseUrl+"clientes/", {params:body});
}

insertCliente(cliente:Cliente){  
  return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente, this.httpOptions);
}

}
