import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crud-grados',
  templateUrl: './crud-grados.component.html',
  styleUrls: ['./crud-grados.component.css']
})
export class CrudGradosComponent implements OnInit {
  @Output() cancelar: EventEmitter<boolean> = new EventEmitter();

  grados: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  private createForm() {
    this.grados = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(10) ]]

    });
  }

  cancelAction() {

    this.cancelar.emit(true);

  }

}
