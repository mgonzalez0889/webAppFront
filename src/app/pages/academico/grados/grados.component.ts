import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
  protected enableBtn = false;
  protected activar = false;

  constructor() { }

  ngOnInit() {
  }

  addNewGrados() {
  this.activarMenu();

  }

  activarMenu() {
    this.enableBtn = !this.enableBtn;
    this.activar = !this.activar;

  }



}
