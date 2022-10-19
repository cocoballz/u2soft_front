import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any;
  proveedor_productos: any;



  constructor(public userService:UsersService, public router:Router) {
    this.productos = []
    this.proveedor_productos = []
    this.getproductos();
  }

  ngOnInit(): void {
  }

  getproductos(){
      this.userService.getinfo_productos().subscribe( data => {
      this.productos = data.datos;
    },
    error => {
      console.log(error); 
    });
  }

  getprovedoresproducto(id_producto: string){
  console.log('llamando producto ['+ id_producto +']');

    const datos = {producto: id_producto};
    this.userService.getinfo_proveedor_producto(datos).subscribe(data => {
        console.log(data);
        Swal.fire({
          icon: 'info',
          toast: true, 
          title: 'Consulta',
          html:  'Proveedores encotrados: '+ data.datos.length,
        })
      this.proveedor_productos=data.datos;

      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Proveedor no encontrado para este producto.'
        })
      }
    );





  }

}
