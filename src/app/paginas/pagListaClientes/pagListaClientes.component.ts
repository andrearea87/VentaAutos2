import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagListaClientes',
  templateUrl: './pagListaClientes.component.html',
  styleUrls: ['./pagListaClientes.component.css']
})
export class PagListaClientesComponent implements OnInit {

  listaClientes:Array<any>=[];
  public rows:number=10;
  public page:number=1;
  public pages:number=0;
  public filtro:string="";

  constructor(private clienteService:ClienteService,
    private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.consultaClientes();
  }

  consultaClientes(){
    this.clienteService.getClientes(this.filtro,this.rows,this.page).subscribe(respuesta=>{      
      if(respuesta.codigo=='1'){
        this.listaClientes=respuesta.data;
        console.log(this.listaClientes);
        this.pages=respuesta.pages;
        this.paginar(respuesta.pages);
      }
    }

    );    
  }
  
  cambiarPagina(pagina:number){
    this.page=pagina;
    this.consultaClientes();
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
      this.consultaClientes();
    }
  }

  atras(){
    if(this.page>1){
      this.page--;
      this.consultaClientes();
    }
  }

}
