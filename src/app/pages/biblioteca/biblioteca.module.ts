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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CrudAreasComponent } from './areas/components/crud-areas/crud-areas.component';
import { ListarAreasComponent } from './areas/components/listar-areas/listar-areas.component';
import { ListarAutoresComponent } from './autores/components/listar-autores/listar-autores.component';
import { CrudAutoresComponent } from './autores/components/crud-autores/crud-autores.component';
import { CrudExistenciaComponent } from './existencia/components/crud-existencia/crud-existencia.component';
import { ListarExistenciaComponent } from './existencia/components/listar-existencia/listar-existencia.component';
import { ListarLibroComponent } from './libro/components/listar-libro/listar-libro.component';
import { CrudLibroComponent } from './libro/components/crud-libro/crud-libro.component';
import { CrudTipoComponent } from './tipo/components/crud-tipo/crud-tipo.component';
import { ListarTipoComponent } from './tipo/components/listar-tipo/listar-tipo.component';


@NgModule({
  declarations: [
    EditorialComponent,
    AutoresComponent,
    TipoComponent,
    AreasComponent,
    LibroComponent,
    ExistenciaComponent,
    ListarEditorialComponent,
    CrudEditorialComponent,
    CrudAreasComponent,
    ListarAreasComponent,
    ListarAutoresComponent,
    CrudAutoresComponent,
    CrudExistenciaComponent,
    ListarExistenciaComponent,
    ListarLibroComponent,
    CrudLibroComponent,
    CrudTipoComponent,
    ListarTipoComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BibliotecaModule { }
