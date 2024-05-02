import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-vehiculoDetalle',
  templateUrl: './vehiculoDetalle.component.html',
  styleUrls: ['./vehiculoDetalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {
  vehiculo?:Vehiculo;
  formulario:FormGroup;
 
  constructor(private activatedRoute:ActivatedRoute,
    private vehiculoService:VehiculoService,
    private formBuilder:FormBuilder) { 
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
      this.formulario.controls['codigo'].disable;

    }

  ngOnInit() {      
    this.activatedRoute.params.subscribe(
      params =>{
        this.vehiculoService.getVehiculo(params['codigo']).subscribe(
           data=>{
              if(data.codigo == '1'){
                this.vehiculo=data.data;
                this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
                this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
                this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
                this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
                this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
                this.formulario.controls['color'].setValue(this.vehiculo?.color);               
                this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
                this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
                
              }else{
                Swal.fire(
                  {
                    title:"Mensaje de alerta",
                    text:"No se puede cargar la informacion",
                    icon:"error"
                  }
                )
              }
           }
        )
        
      }
    )
  }

  guardar(){
    if(this.formulario.valid){
      this.vehiculoService.actualizarVehiculo({...this.formulario.value},this.formulario.controls['codigo'].value).subscribe(
        data=>{
          if(data.codigo == '1'){
            Swal.fire(
              {
                title:"Mensaje",
                text:"Vehiculo actualizado con exito",
                icon:"info"
              }
            );
          }else{
            Swal.fire({
              title:"Mensaje",
              text:"No se pudo actualizar:"+data.mensaje,
              icon:"error"
            })
          }
        }
      );
    }else{
      Swal.fire(
        {
          title:"Mensaje",
          text:"Faltan campos por llenar",
          icon:"error"
        }
      );
    }
  }

}
