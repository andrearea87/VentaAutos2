import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagListaVehiculosComponent } from './paginas/pagListaVehiculos/pagListaVehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    PagListaVehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
