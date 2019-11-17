import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  protected activado = false;
  protected enableBtn = false;

  constructor() {

  }

  ngOnInit() {}

  addNewAutores() {
    this.activeAdd();
  }

  editAutores() {

  }

  deleteAutores() {

  }

  notificacion() {

  }

  /*
  * Descripcion: este metodo permite activar el menu de botones para los formularios de crear
  * */
  activeAdd() {
    this.activado = !this.activado;// Actua como swicht
    this.enableBtn = !this.enableBtn;// Actua como swicht para activar los botones
  }



}
