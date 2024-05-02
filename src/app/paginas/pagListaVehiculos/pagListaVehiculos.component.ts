import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagListaVehiculos',
  templateUrl: './pagListaVehiculos.component.html',
  styleUrls: ['./pagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen=true;
  //filtro:string="";
  //private _filtro:string="";
  public rows:number=10;
  public page:number=1;
  public pages:number=0;
  public filtro:string="";

  listaVehiculos:Array<any>=[];
  constructor(private vehiculoService:VehiculoService,
    private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute) { }

  

  ngOnInit() {
    this.consultaVehiculos();
    //this.vehiculoService.addVehiculo({"codigo":"A004","marca":"Mazda3","modelo":"M-3","anio":"2025","color":"Azul","kilometraje":"12000","precio":20000,"calificacion":5, "foto":"v2.jpg"});
  }

  /*get filtro():string{
    return this._filtro;
  }

  set filtro(data:string){
    this._filtro=data;
    this.consultaVehiculos();
  }*/

  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro,this.rows,this.page).subscribe(respuesta=>{
      if(respuesta.codigo == '1'){
        this.listaVehiculos=respuesta.data;
        this.pages=respuesta.pages;
        this.paginar(respuesta.pages);
      }
      
    });
  }

  mostrar(){
    this.mostrarImagen=!this.mostrarImagen;
  }

  recepcion(dato:number){
    console.log('Datos: ', dato)
  }

  cambiarPagina(pagina:number){
    this.page=pagina;
    this.consultaVehiculos();
  }

  listaPaginas:Array<number>=[];
  paginar(pages:number){
    this.listaPaginas=[];
    for(let i=1;i<=pages;i++){
      this.listaPaginas.push(i);
    }
  }

  siguiente(){
    if(this.page<this.pages){
      this.page++;
      this.consultaVehiculos();
    }
  }

  atras(){
    if(this.page>1){
      this.page--;
      this.consultaVehiculos();
    }
  }

  eliminar(codigo:string){
    Swal.fire(
      {
        title:"Estas seguro que deseas eliminar este registro",
        showCancelButton:true,
        confirmButtonText:"SI",
        cancelButtonText:"No",
        icon:"question"
      }
    ).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(
          data=>{
            if(data.codigo == '1'){
              this.consultaVehiculos();
              Swal.fire({
                title:"Mensaje",
                text:"Vehiculo eliminado con exito",
                icon:"success"
              });
            }else{
              Swal.fire({
                title:"Mensaje",
                text:"No se pudo eliminar el registro: "+data.mensaje,
                icon:"error"
              });
            }
          }
        );
      }
    }
    );
  }

  

}
