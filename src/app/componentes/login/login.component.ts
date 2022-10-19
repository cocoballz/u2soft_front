import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private usersService: UsersService, public router: Router) {
    this.logout();
    this.email = '';
    this.password = '';

  }

  ngOnInit(): void {
  } 

  logout() {
    this.usersService.logout();
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe(data => {
        //console.log(data);
        this.usersService.setToken(data.access_token);
        this.router.navigateByUrl('/inicio');
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos de ingreso Incorrectos.'
        })
      }
      );
  }


}
