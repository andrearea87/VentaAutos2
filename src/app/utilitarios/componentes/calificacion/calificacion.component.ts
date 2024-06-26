import { Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, OnChanges {

  @Input() calificacion:any=0;
  lista:Array<any>=[];
  @Output() accion = new EventEmitter<any>();
   
  constructor() { }

  ngOnInit() {
   this.generar();
  }

  ngOnChanges(changes: SimpleChanges):void{
    if(changes['calificacion'].currentValue){
      this.generar();
    }
  }

  generar(){
    for (let i=0;i<this.calificacion;i++)
      this.lista.push(1);
  }

  select(){
    this.accion.emit(this.calificacion);
  }

}
