import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './paginas/PaginaModule';
//import { PagListaVehiculosComponent } from './paginas/pagListaVehiculos/pagListaVehiculos.component';
import { PagNotFoundComponent } from './pagNotFound/pagNotFound.component';
import { PagVehiculoComponent } from './pagVehiculo/pagVehiculo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';

@NgModule({
  declarations: [		
    AppComponent,
      PagNotFoundComponent
      //, PagVehiculoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PaginaModule, 
    HttpClientModule  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:UserInterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
