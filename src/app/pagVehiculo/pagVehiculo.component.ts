import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from '../servicios/Vehiculo.service';

@Component({
  selector: 'app-pagVehiculo',
  templateUrl: './pagVehiculo.component.html',
  styleUrls: ['./pagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo?:Vehiculo={
    codigo:"001" 
  };
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private _router:Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(
        data=>{this.vehiculo=data}
      );
    });

    //this.vehiculo=this.vehiculoService.getVehiculo(params['codigo'])
  }

  onBack():void{
    this._router.navigate(['/vehiculos']);
  }

}
