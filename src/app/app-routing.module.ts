import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarProductoComponent } from './insertar-producto/insertar-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';

const routes: Routes = [
  {path : 'productos',component:ListaProductosComponent},
  {path : '',redirectTo:'productos',pathMatch:'full'},
  {path : 'insertar-producto',component:InsertarProductoComponent},
  {path : 'actualizar-producto/:id',component:ActualizarProductoComponent},
  {path : 'eliminar-producto/:id',component:ListaProductosComponent},
  {path : 'producto-detalles/:id',component : ProductoDetallesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
