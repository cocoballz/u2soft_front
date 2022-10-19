import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { PedidosComponent } from "./componentes/pedidos/pedidos.component";
import { ProductosComponent } from "./componentes/productos/productos.component";
import { DashboardComponent } from "./componentes/partials/dashboard/dashboard.component";
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: DashboardComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
