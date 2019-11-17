import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  protected enableBtn = false;
  protected activar = false;


  constructor() { }

  ngOnInit() {
  }

  addNewAreas() {
    this.activarMenu();
  }

  activarMenu() {
    this.activar = !this.activar;
    this.enableBtn = !this.enableBtn;
  }

}
