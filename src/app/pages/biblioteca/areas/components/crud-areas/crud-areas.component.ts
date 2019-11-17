import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crud-areas',
  templateUrl: './crud-areas.component.html',
  styleUrls: ['./crud-areas.component.css']
})
export class CrudAreasComponent implements OnInit {

  @Output() cancelar: EventEmitter<boolean> = new EventEmitter<boolean>();
  areas: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.areas = this.fb.group({
      nombres: ['', [Validators.required] ],
      detalles: ['', [Validators.required] ]
    });

  }

  cancelAction() {
    this.cancelar.emit(true);
  }

  saveAreas() {

  }


}
