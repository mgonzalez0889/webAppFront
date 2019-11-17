import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CategoryGradeService } from '@data/category-grade.service';
@Component({
  selector: 'app-crud-editorial',
  templateUrl: './crud-editorial.component.html',
  styleUrls: ['./crud-editorial.component.css']
})
export class CrudEditorialComponent implements OnInit {
  @Output() salida: EventEmitter<boolean> = new EventEmitter<boolean>();

  public editorial: FormGroup;

  constructor(private service: CategoryGradeService,
              protected fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.editorial = this.fb.group({
        nombres: ['', [Validators.required, Validators.minLength(10)] ],
        telefono: ['', [Validators.required, Validators.minLength(7), Validators.pattern("[0-9]+") ] ],
        direccion: ['', [Validators.required, Validators.minLength(12)] ],
        email: ['', [Validators.required,
                     Validators.minLength(7),
                     Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")] ],
        pais: ['']
    });

  }

  saveEditorial( data ) {
    this.service.postCategoryGrade(data)
                .subscribe(res => {
      console.log(res);
      this.salida.emit(true);
    });
  }





}
