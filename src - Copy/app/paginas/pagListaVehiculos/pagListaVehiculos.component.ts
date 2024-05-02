import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagListaVehiculos',
  templateUrl: './pagListaVehiculos.component.html',
  styleUrls: ['./pagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen=true;
  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    this.mostrarImagen=!this.mostrarImagen;
  }

  public listaVehiculos: Array<any >=[
    {"Codigo":"A001","Marca":"Chevrolet","Modelo":"M1","Anio":"2022","Color":"Rojo","Kilometraje":"15000","Precio":"20000","Calificacion":"****", "foto":"v1.jpg"},
    {"Codigo":"A002","Marca":"Mazda","Modelo":"M2","Anio":"2024","Color":"Blanco","Kilometraje":"10000","Precio":"21000","Calificacion":"**", "foto":"v2.jpg"},
  ];

}
