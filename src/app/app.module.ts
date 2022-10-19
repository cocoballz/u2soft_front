import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/partials/navbar/navbar.component';
import { DashboardComponent } from './componentes/partials/dashboard/dashboard.component';
import { FooterComponent } from './componentes/partials/footer/footer.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    PedidosComponent,
    ProductosComponent,
    ProveedoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
