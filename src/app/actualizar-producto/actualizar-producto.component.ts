
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  handleSearch(value: string){
    console.log(value);
  }

  id:number;
  producto:Producto = new Producto;
  constructor(private productoService:ProductoService, private router:Router, private route:ActivatedRoute ) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
    },error => console.log(error));
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    swal('Producto actualizado.',`El producto ${this.producto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit() {
    this.productoService.actualizarProducto(this.id,this.producto).subscribe(dato=> {
      this.irALaListaDeEmpleados();
    },error => console.log(error));
  }
}
