import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  //vehiculo?: Vehiculo;
  formulario:FormGroup;
  constructor(private vehiculoServicio:VehiculoService,
    private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute) { 
    /*this.vehiculo={
      codigo:'',
      marca:'',
      modelo:'',
      anio:'',
      color:'',    
      kilometraje:'',
      precio:0,
      calificacion:0,
      foto:''   
    };*/

    this.formulario=this.formBuilder.group({
      "codigo":['',[Validators.required, validadorCodigo()]],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":['',[Validators.required]],
      "color":['',[Validators.required]],    
      "kilometraje":['',[Validators.required]],
      "precio":['',[Validators.required]],
      "calificacion":['',[Validators.required]],
      "foto":[]  
    });
  }

  ngOnInit() {
   
  }

  guardar(){   
    /*let vehiculo:Vehiculo={...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo);
    console.log('Guardado con exito');
    console.log("Formulario ",this.formulario.value);*/
    if(this.formulario.valid){
      this.vehiculoServicio.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta=>{
          if(respuesta.codigo == '1'){
            //alert("Vehiculo registrado con exito!");
            Swal.fire({
              title:"Mensaje",
              text:"Vehiculo registrado con exito!",
              icon:"success"
            }).then(res=>{
                this.formulario.reset();
              }
            )
          }else{
            //alert("No se pudo registrar el vehiculo!"+respuesta.mensaje);
            Swal.fire({
              title:"Mensaje",
              text:"No se pudo registrar el vehiculo!"+respuesta.mensaje,
              icon:"error"
            })
          }
        }
      )
    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan campos por llenar",
        icon:"error"
      })
    }
  }



}

/*export function validadorCodigo():ValidatorFn{
  return (control:AbstractControl):ValidationErrors|null=>{
    const codigoV=/^[A-Z]\d{4}$/;
    let value=control.value;
    if(codigoV.test(value)){
      return null;
    }
    return {'codigoValidate':true};
  }
}*/
