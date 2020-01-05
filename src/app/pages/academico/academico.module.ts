import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AulasComponent } from './aulas/aulas.component';
import { GradosComponent } from './grados/grados.component';
import { MateriasComponent } from './materias/materias.component';
import { CrudAulasComponent } from './aulas/components/crud-aulas/crud-aulas.component';
import { ListarAulasComponent } from './aulas/components/listar-aulas/listar-aulas.component';
import { ListarDocentesComponent } from './docentes/components/listar-docentes/listar-docentes.component';
import { CrudDocentesComponent } from './docentes/components/crud-docentes/crud-docentes.component';
import { CrudEstudiantesComponent } from './estudiantes/components/crud-estudiantes/crud-estudiantes.component';
import { ListarEstudiantesComponent } from './estudiantes/components/listar-estudiantes/listar-estudiantes.component';
import { ListarGradosComponent } from './grados/components/listar-grados/listar-grados.component';
import { CrudGradosComponent } from './grados/components/crud-grados/crud-grados.component';
import { CrudMateriasComponent } from './materias/components/crud-materias/crud-materias.component';
import { ListarMateriasComponent } from './materias/components/listar-materias/listar-materias.component';
import {AgGridModule} from 'ag-grid-angular';

// Formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DocentesComponent,
    EstudiantesComponent,
    AulasComponent,
    GradosComponent,
    MateriasComponent,
    CrudAulasComponent,
    ListarAulasComponent,
    ListarDocentesComponent,
    CrudDocentesComponent,
    CrudEstudiantesComponent,
    ListarEstudiantesComponent,
    ListarGradosComponent,
    CrudGradosComponent,
    CrudMateriasComponent,
    ListarMateriasComponent],
  imports: [
    CommonModule,
    AcademicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule

  ]
})
export class AcademicoModule { }
