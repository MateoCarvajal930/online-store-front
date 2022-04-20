import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import {HttpClientModule} from '@angular/common/http';
import { InsertarProductoComponent } from './insertar-producto/insertar-producto.component';
import { FormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { FilterPipe } from './filter.pipe';
import { BusquedaComponent } from './busqueda/busqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    InsertarProductoComponent,
    ActualizarProductoComponent,
    ProductoDetallesComponent,
    FilterPipe,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
