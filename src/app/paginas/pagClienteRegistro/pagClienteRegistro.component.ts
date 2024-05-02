import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../servicios/Cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagClienteRegistro',
  templateUrl: './pagClienteRegistro.component.html',
  styleUrls: ['./pagClienteRegistro.component.css']
})
export class PagClienteRegistroComponent implements OnInit {

  formulario:FormGroup;
  valor?:string;
  constructor(private clienteServicio:ClienteService,
    private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute,
    private _router:Router) { 
      this.formulario=this.formBuilder.group({
        "nombre":['',[Validators.required]],
        "apellido":['',[Validators.required]],
        "password":['',[Validators.required]],
        "telefono":[''],
        "email":[''] 
      });
    }

  ngOnInit() {
  }

  guardar(){
    if(this.formulario.valid){
      this.clienteServicio.insertCliente({...this.formulario.value}).subscribe(
        respuesta=>{
          if(respuesta.codigo == '1'){
            //alert("Cliente registrado con exito!");
            Swal.fire({
              title:"Mensaje",
              text:"Cliente registrado con exito!",
              icon:"success"
            }).then(res=>{
                this.formulario.reset();
              }
            )
          }else{
            //alert("No se pudo registrar el cliente!"+respuesta.mensaje);
            Swal.fire({
              title:"Mensaje",
              text:"No se pudo registrar el cliente!"+respuesta.mensaje,
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

  onBack():void{
    this._router.navigate(['/home']);
  }

}
