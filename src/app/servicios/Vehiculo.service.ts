import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
};  

constructor(private http: HttpClient) { }
baseUrl="https://epico.gob.ec/vehiculo/public/api/";
//https://epico.gob.ec/vehiculo/public/api/vehiculos/

//Todos vehiculos => GET vehiculos/
//Insert => POST vehiculo/
//Updte => PUT vehiculo/
//Delete => DELETE vehiculo/:codigo
//Consulta => GET vehiculo/:codigo


/*getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
  const escucha:Observable<Array<Vehiculo>>=new Observable( escuchando => {
    let lista = this.listaVehiculos.filter(ele => ele.marca?.toLowerCase().includes(filtro.toLowerCase()));  
    escuchando.next(lista);
    }
  );  
  return escucha;
 
}*/

getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
  let body = new HttpParams();
  body=filtro?body.set('filtro',filtro):body;
  body=rows?body.set('rows',rows):body;
  body=page?body.set('page',page):body;

 /* return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body}).pipe(
    map(respuesta => respuesta.data)
  );*/

  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body});
}

insertVehiculo(vehiculo: Vehiculo){  
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
}

/*
getVehiculo(codigo:string):Observable<Vehiculo|undefined>{
  const escucha:Observable<Vehiculo|undefined>=new Observable( escuchando => {
    let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);  
    escuchando.next(vehiculo);
    }
  );  
  return escucha;
}*/

getVehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

actualizarVehiculo(vehiculo:Vehiculo, codigo:string){
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOptions);
}

eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

addVehiculo(vehiculo:Vehiculo){
  this.listaVehiculos.push(vehiculo);
}

private listaVehiculos: Array<Vehiculo >=[
  {"codigo":"A001","marca":"Chevrolet","modelo":"M-1","anio":"2022","color":"Rojo","kilometraje":"15000","precio":20000,"calificacion":2, "foto":"https://kerner.hyundai.com.ec/images/catalogo/modelos/principales/1036.png"},
  {"codigo":"A002","marca":"Mazda","modelo":"M-2","anio":"2024","color":"Blanco","kilometraje":"10000","precio":21000,"calificacion":6, "foto":"https://www.toyota.com.ec//admin/sites/default/files/2023-09/agya-home-toyota.png"},
  {"codigo":"A003","marca":"Mazda3","modelo":"M-3","anio":"2025","color":"Azul","kilometraje":"12000","precio":20000,"calificacion":5, "foto":"https://kerner.hyundai.com.ec/images/catalogo/modelos/principales/1036.png"},
];

}

export interface Respuesta{
  codigo:string;
  mensaje:string;
  data:Array<Vehiculo>|Vehiculo|any;
  rows:number;
  pages:number;
  records:number;
  page:number;
}


