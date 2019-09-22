import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { AreasComponent } from './areas/areas.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';


const routes: Routes = [
  {path: 'editorial', component: EditorialComponent},
  {path: 'autores', component: AutoresComponent},
  {path: 'areas', component: AreasComponent},
  {path: 'existencia', component: ExistenciaComponent},
  {path: 'libro' ,component: LibroComponent},
  {path: 'tipo', component: TipoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
