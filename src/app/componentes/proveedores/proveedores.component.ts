import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../../services/users.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores :any;

  constructor( public userservice:UsersService ) {
    this.proveedores =[]
  }

  ngOnInit(): void {
    this.getproveedores();
  }

  getproveedores(){
    this.userservice.getinfo_proveedores().subscribe(data => {
      console.log(data);
      this.proveedores=data.datos;

    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Proveedores No encontrados.'
      })
    }
    );
  }


}
