import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //url para listar productos backend
  private baseURL ="http://localhost:8080/api/productos";


  constructor(private httpClient : HttpClient) { }


  //Listar productos
  obtenerListaDeProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }
  //Registrar productos
  insertarProducto(producto:Producto) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,producto);
  }
  //Actualizar producto
  actualizarProducto(id:number,producto:Producto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }
  //Listar productos por id
  obtenerProductoPorId(id:number):Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
  }
  //Eliminar producto 
  eliminarProducto(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
