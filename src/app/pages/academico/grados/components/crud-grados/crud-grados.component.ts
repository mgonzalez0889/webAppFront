import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryGradeService} from "@data/category-grade.service";

@Component({
  selector: 'app-crud-grados',
  templateUrl: './crud-grados.component.html',
  styleUrls: ['./crud-grados.component.css']
})
export class CrudGradosComponent implements OnInit {
  @Output() cancelar: EventEmitter<boolean> = new EventEmitter();
  @Output() emitirListado: EventEmitter<boolean> = new EventEmitter();

  categories = [];

  grados: FormGroup;
  constructor(private gradeServices: CategoryGradeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    // Habilita el formulario desde el inicio del Oninit
    this.createForm();
  }



  private createForm() {
    this.grados = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(6) ]]
    });
  }

  saveGrados(grados) {
    this.gradeServices.postCategoryGrade(grados)
    .subscribe(res => {
        alert('Datos almacenados con exito');

      });
    this.emitirListado.emit(true);
  }

  cancelAction() {
    this.cancelar.emit(true);

  }

}
