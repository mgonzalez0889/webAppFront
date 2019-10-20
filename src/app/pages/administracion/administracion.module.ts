import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { RolesComponent } from './roles/roles.component';
import { ModulosComponent } from './modulos/modulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListarModulosComponent } from './modulos/components/listar-modulos/listar-modulos.component';
import { CrudModulosComponent } from './modulos/components/crud-modulos/crud-modulos.component';
import { CrudRolesComponent } from './roles/components/crud-roles/crud-roles.component';
import { ListarRolesComponent } from './roles/components/listar-roles/listar-roles.component';
import { ListarUsuariosComponent } from './usuarios/components/listar-usuarios/listar-usuarios.component';
import { CrudUsuariosComponent } from './usuarios/components/crud-usuarios/crud-usuarios.component';


@NgModule({
  declarations: [RolesComponent, ModulosComponent, UsuariosComponent, ListarModulosComponent, CrudModulosComponent, CrudRolesComponent, ListarRolesComponent, ListarUsuariosComponent, CrudUsuariosComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
