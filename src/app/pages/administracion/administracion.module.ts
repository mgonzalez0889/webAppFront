import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { RolesComponent } from './roles/roles.component';
import { ModulosComponent } from './modulos/modulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [RolesComponent, ModulosComponent, UsuariosComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
