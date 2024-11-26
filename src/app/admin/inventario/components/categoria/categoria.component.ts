import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';

interface Categoria {
  id: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];
  visible: boolean = false;
  dialog_visible: boolean = false;
  categoria_id:number=-1;
  categoriaForm= new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl('')
  })

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.funListar().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  mostrarDialog() {
    this.dialog_visible = true; 
  }

  guardarCategoria(){
    if(this.categoria_id>0){
       this.categoriaService.funModificar(this.categoria_id,this.categoriaForm.value).subscribe(
        (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
        this.categoria_id=-1;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  else{
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  this.categoriaForm.reset();
 }
  editarCategoria(cat:Categoria){
    this.dialog_visible=true
    this.categoria_id=cat.id
    this.categoriaForm.setValue({nombre: cat.nombre, detalle: cat.detalle})
  }
  eliminarCategoria(cat:Categoria){

  }
}
