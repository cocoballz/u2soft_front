import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
 
})
export class UsersService {

 urlbase= "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient, private cookies: CookieService) { 
  }

  login(user: any): Observable<any>{
    const url = this.urlbase+"/login";
    const headers = { 'Accept': 'application/json' };
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const url = "https://reqres.in/api/login";
    return this.http.post(url, user, {headers});
  }

  logout(){this.cookies.delete("auth_token"); return true}

  setToken(auth_token: string){
    this.cookies.set("auth_token", auth_token);
  }
  getToken() {
    return this.cookies.get("auth_token");
  }
  getinfo_pedidos(): Observable<any>{
     const url = this.urlbase+"/list_pedidos";
     //const dat = "true";
    return this.http.post(url,'');
  } 
  getinfo_productos(): Observable<any>{
     const url = this.urlbase+"/list_stock";
     //const dat = "true";
    return this.http.post(url,'');
  }





  register(user: any): Observable<any>{
    const url = "http://127.0.0.1:8000/api/register";
    return this.http.post(url, user);
  }
  modificacion(datos: any): Observable<any>{
    const url = "http://127.0.0.1:8000/api/tramitar";
    const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
    return this.http.post(url, datos, {headers});
  }


  
  new_acount(dat: any): Observable<any>{
    const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+dat.auth_token, 'My-Custom-Header': 'foobar' };
    const url ="http://127.0.0.1:8000/api/create_acount";
    return this.http.post(url, dat,{headers});
  }



}
