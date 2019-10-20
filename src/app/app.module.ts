import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TemplateComponent } from './thema/template/template.component';
import { NavbarComponent } from './thema/navbar/navbar.component';
import { ContenidoComponent } from './thema/contenido/contenido.component';
import { SidebarComponent } from './thema/sidebar/sidebar.component';
import { FooterComponent } from './thema/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TemplateComponent,
    NavbarComponent,
    ContenidoComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
