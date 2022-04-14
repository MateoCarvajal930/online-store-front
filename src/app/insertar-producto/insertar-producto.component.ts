import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {

  producto : Producto = new Producto();
  constructor(private productoService:ProductoService, private router : Router) { }

  ngOnInit(): void {

  }

  
  guardarProducto() {
    this.productoService.insertarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irAListaProductos();
    },error => console.log(error));
  }

  irAListaProductos() {
    this.router.navigate(['/productos']);
  }
  onSubmit() {
    this.guardarProducto();
  }
   

}
