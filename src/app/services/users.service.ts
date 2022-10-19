import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'

})
export class UsersService {

  urlbase= "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any>{
    const url = this.urlbase+"/login";
    const headers = { 'Accept': 'application/json' };
    return this.http.post(url, user, {headers});
  }

  logout(){this.cookies.delete("auth_token"); return true}

/**
* INICIO FUNCIONES JWT o TOKEN (LARAVEL sanctum)
*/

setToken(auth_token: string){
  this.cookies.set("auth_token", auth_token);
}
getToken() {
  return this.cookies.get("auth_token");
}
/**
* FIN FUNCIONES JWT o TOKEN (LARAVEL sanctum)
*/


/**
* INICIO FUNCIONES CONSULTA GENERAL
*/
getinfo_pedidos(): Observable<any>{
  const url = this.urlbase+"/list_pedidos";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,'',{headers});
} 
getinfo_productos(): Observable<any>{
  const url = this.urlbase+"/list_stock";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,'',{headers});
} 

getinfo_proveedores(): Observable<any>{
  const url = this.urlbase+"/list_proveedores";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,'',{headers});
}

/**
* FIN FUNCIONES CONSULTA GENERAL
*/


/**
* INICIO FUNCIONES CONSULTA ESPECIFICA
*/
getinfo_proveedor_producto(datos: any): Observable<any>{
  const url = this.urlbase+"/list_proveedores_producto";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,datos,{headers});
}

getinfo_productos_pedido(datos: any): Observable<any>{
  const url = this.urlbase+"/detail_pedido";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,datos,{headers});
}

/**
* FIN FUNCIONES CONSULTA ESPECIFICA
*/


/**
* INICIO FUNCIONES DE MODIFICACION
*/

send_pedido(datos: any): Observable<any>{
  const url = this.urlbase+"/envio";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,datos,{headers});
}

add_producto(datos: any): Observable<any>{
  const url = this.urlbase+"/restablecer";
  const headers = { 'Accept': 'application/json', 'Authorization': 'Bearer '+this.getToken(), 'My-Custom-Header': 'foobar' };
  return this.http.post(url,datos,{headers});
}

/**
* FIN FUNCIONES DE MODIFICACION
*/

}
