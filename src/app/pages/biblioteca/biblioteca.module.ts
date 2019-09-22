import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { ListarEditorialComponent } from './editorial/components/listar-editorial/listar-editorial.component';
import { CrudEditorialComponent } from './editorial/components/crud-editorial/crud-editorial.component';


@NgModule({
  declarations: [
    EditorialComponent, 
    AutoresComponent, 
    TipoComponent, 
    AreasComponent, 
    LibroComponent, 
    ExistenciaComponent, ListarEditorialComponent, CrudEditorialComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
