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
    const datos = {producto: id_producto};
    this.userService.getinfo_proveedor_producto(datos).subscribe(data => {
      console.log(data.datos);
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

  add_producto(id_prov_proc: string , cantidad:string){
    const datos = {No_provedor_producto: id_prov_proc, valor:cantidad};
    this.userService.add_producto(datos).subscribe(data => {
      console.log(data);
      this.getproductos();
      if(data.status){
        Swal.fire({
          icon: 'success',
          title: 'Productos Comprado con Exito...',
          text: 'Se la compra del producto ya lo puedes encontrar en el stock.'
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error al comprar producto...',
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

