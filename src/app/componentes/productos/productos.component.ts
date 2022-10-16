import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
productos: any;
 dtOptions: DataTables.Settings = {};

  constructor(public userService:UsersService, public router:Router) { }

  ngOnInit(): void {
    this.userService.getinfo_productos().subscribe( data => {
      console.log('creado');
      console.log(data);
      this.productos = data.datos;
      console.table(this.productos);
    },
    error => {
      console.log(error); 
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
