import { NgModule } from '@angular/core';
import { PagListaVehiculosComponent } from './pagListaVehiculos/pagListaVehiculos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';
import { PagVehiculoComponent } from '../pagVehiculo/pagVehiculo.component';
import { RouterModule } from '@angular/router';
import { PagVehiculoRegistroComponent } from './PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetalleComponent } from './vehiculoDetalle/vehiculoDetalle.component';
import { PagListaClientesComponent } from './pagListaClientes/pagListaClientes.component';
import { PagClienteRegistroComponent } from './pagClienteRegistro/pagClienteRegistro.component';

@NgModule(
    {
        imports:[CommonModule,FormsModule, UtilitariosModule, RouterModule, ReactiveFormsModule],
        declarations:[
            PagListaVehiculosComponent, 
            PagVehiculoComponent, 
            PagVehiculoRegistroComponent, 
            VehiculoDetalleComponent,
            PagListaClientesComponent,
            PagClienteRegistroComponent
        ],
        exports:[
            PagListaVehiculosComponent, 
            PagVehiculoComponent, 
            PagVehiculoRegistroComponent, 
            VehiculoDetalleComponent,
            PagListaClientesComponent,
            PagClienteRegistroComponent
        ]
    }
)
export class PaginaModule{

}