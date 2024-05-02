import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/pagListaVehiculos/pagListaVehiculos.component';
import { PagNotFoundComponent } from './pagNotFound/pagNotFound.component';
import { PagVehiculoComponent } from './pagVehiculo/pagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetalleComponent } from './paginas/vehiculoDetalle/vehiculoDetalle.component';
import { PagListaClientesComponent } from './paginas/pagListaClientes/pagListaClientes.component';
import { PagClienteRegistroComponent } from './paginas/pagClienteRegistro/pagClienteRegistro.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
  },
  {
    //Listado de vehiculos
    path:"vehiculos",
    component:PagListaVehiculosComponent
  },{
    //Listado de clientes
    path:"clientes",
    component:PagListaClientesComponent
  },
  {
    //Nuevo vehiculo
    path:"vehiculo",
    component:PagVehiculoRegistroComponent
  },{
    //Nuevo cliente
    path:"cliente",
    component:PagClienteRegistroComponent
  },
  {
    //EDITAR
    path:"vehiculo/:codigo",
    //component:PagVehiculoComponent
    component:VehiculoDetalleComponent
  },
  {
    //CONSULTAR detalle
    path:"vehiculoDetalle/:codigo",
    component:PagVehiculoComponent  
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"**",
    component:PagNotFoundComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
