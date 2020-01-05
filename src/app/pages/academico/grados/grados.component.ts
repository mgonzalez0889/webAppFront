import {Component, Input, OnInit} from '@angular/core';
import {CategoryGradeService} from "@data/category-grade.service";


@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
  lista: boolean;
  @Input() recibe: number;
  id: number;
  protected enableBtn = false;
  protected activar = false;

  constructor(private gradeService: CategoryGradeService) { }

  ngOnInit() {
  }

  addNewGrados() {
  this.activarMenu();

  }

  activarMenu() {
    this.enableBtn = !this.enableBtn;
    this.activar = !this.activar;

  }

  editGrados() {
    console.log('Comienza el editar');
  }

  deleteGrados(id) {
    this.gradeService.deleteCategoryGrade(id)
        .subscribe( res => {
        alert('Registro eliminado con exito');
    });

  }


}
