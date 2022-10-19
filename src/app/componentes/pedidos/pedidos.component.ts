import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: any;
  pedido_product: any;

  constructor(public userService:UsersService, public router:Router) {
    this.pedidos=[]
    this.pedido_product=[]
    this.getpedidos();
  }

  ngOnInit(): void {
  }

  getpedidos(){
    this.userService.getinfo_pedidos().subscribe( data => {
      this.pedidos = data.datos;
      console.table(this.pedidos);
    },
    error => {
      console.log(error);
    });
  }

  pedido_productos(id_pedido: string){
    const datos = {No_pedido: id_pedido};
    this.userService.getinfo_productos_pedido(datos).subscribe(data => {
      console.log(data.datos);
      this.pedido_product=data.datos;
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontro lista de productos para el pedido.'
      })
    }
    );
  }

  envio_pedido(id_pedido: string){
    const datos = {No_pedido: id_pedido};
    this.userService.send_pedido(datos).subscribe(data => {
      console.log(data);
      if(data.status){
        this.getpedidos();
        this.pedido_productos(id_pedido);
        Swal.fire({
          icon: 'success',
          title: 'Pedido Enviado con Exito...',
          text: 'Se realizo el envio de todos los productos del pedido.'
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar el Pedido...',
          text: 'Por validar el error: ['+data.error+'].volver a intentar'
        })
      }

      
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontro lista de productos para el pedido.'
      })
    }
    );
  }

}
