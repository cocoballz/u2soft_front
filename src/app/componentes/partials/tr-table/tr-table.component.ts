import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tr-table',
  templateUrl: './tr-table.component.html',
  styleUrls: ['./tr-table.component.css']
})
export class TrTableComponent implements OnInit {

  @Input() pedido: any
  
  cod_pedido: string;
  prioridad: string;
  cliente: string;
  fecha_entrega: string;

  constructor() {
  this.cod_pedido='a';
  this.prioridad="s";
  this.cliente="s";
  this.fecha_entrega="s";
  }

  ngOnInit(): void {
  this.cod_pedido= this.pedido.cod_pedido;
  this.prioridad=this.pedido.prioridad;
  this.cliente=this.pedido.cliente;
  this.fecha_entrega=this.pedido.fecha_entrega;

  }

}
