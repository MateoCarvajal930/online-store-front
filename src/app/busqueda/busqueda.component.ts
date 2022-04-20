import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import swal from 'sweetalert2';
import { Router} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  producto:Producto[];
  keyword=null;
  keywordMarca=null;
  keywordCategoria=null;
  keywordTipo=null;
  constructor(
    private productoService:ProductoService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.productoService.obtenerListaDeProductos().subscribe(dato => {        
      this.producto = dato;
    })
   }

  obtenerProductoPorNombre(nombre:string){ 
    if(this.keyword)
    this.productoService.obtenerProductoPorNombre(nombre).subscribe(dato=> {
      this.producto=dato
    });else
   this.obtenerProductos();
  }

  obtenerProductosPorMarca(marca:string) {
    if(this.keywordMarca)
    this.productoService.obtenerProductoPorMarca(marca).subscribe(dato=> {
      this.producto=dato
    });else
   this.obtenerProductos();
  }

  obtenerProductosPorCategoria(categoria:string) {
    if(this.keywordCategoria)
    this.productoService.obtenerProductoPorCategoria(categoria).subscribe(dato=> {
      this.producto=dato
    });else
   this.obtenerProductos();
  }
  obtenerProductosPorTipo(tipo:string) {
    if(this.keywordTipo)
    this.productoService.obtenerProductoPorTipo(tipo).subscribe(dato=> {
      this.producto=dato
    });else
   this.obtenerProductos();
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto/',id])
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
    this.router.navigate(['producto-detalles/',id]);
  }
}
