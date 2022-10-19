import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


pedidos: any;
datos: any;



constructor(public userService:UsersService, public router:Router) {
this.pedidos=[]

this.getpedidos()
}

  ngOnInit(): void {

  }

  getpedidos(){
    this.userService.getinfo_pedidos().subscribe( data => {
      this.datos = data.datos;
          this.pedidos = this.datos;
      console.table(this.pedidos);
    },
    error => {
      console.log(error);
    });

   }


}
 