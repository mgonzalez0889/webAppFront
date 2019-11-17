import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-tipo',
  templateUrl: './crud-tipo.component.html',
  styleUrls: ['./crud-tipo.component.css']
})
export class CrudTipoComponent implements OnInit {
  generos: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.generos =  this.fb.group({
       nombres: ['', [Validators.required] ],
       detalles: ['', [Validators.required] ]
    });
  }

  saveGeneros() {


  }


}
