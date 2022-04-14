import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActualizarProductoComponent } from '../actualizar-producto/actualizar-producto.component';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { sequence } from '@angular/animations';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

productos:Producto[];

  constructor(private productoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.productoService.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    })
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto/:id'])
  }

  eliminarProducto(id:number){
    swal({
      title:'Esta seguro?',
      text:"confirma si deseas eliminar el producto.",
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'d33',
      confirmButtonText:'Si, deseo eliminarlo.',
      cancelButtonText:'No, cancelar.',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:true
    }).then((result) => {
      if(result.value){
        this.productoService.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
          swal(
            'Producto eliminado.',
            'El producto ha sido eliminado con exito.',
            'success'
          )
        })
      } 
    })
  }

  verDetallesProducto(id:number) {
    this.router.navigate(['producto-detalles',id]);
  }
}
