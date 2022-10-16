import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

dtOptions: DataTables.Settings = {};

pedidos: any;


constructor(public userService:UsersService, public router:Router) {

this.userService.getinfo_pedidos().subscribe( data => {
      this.pedidos = data.datos;
    },
    error => {
      console.log(error);
    });

   }
  //constructor(private usersService: UsersService) { 
  //this.pedidos = [
  //{id:99, prioridad:1, cliente:"NOMBRE Cliente 1", Fecha_envio:"2022-03-28"},
  //{id:95, prioridad:2, cliente:"NOMBRE Cliente 2", Fecha_envio:"2022-03-28"},
  //];
  //}

  ngOnInit(): void {
     
     this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
 