import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  // 1) declarar prpiead tipo formsgrup
  public areas: FormGroup;
  // 2) inyectar form buider en el constructor
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.areas = this.fb.group({
    codigo: ['',
                 Validators.required,
                 Validators.maxLength(5)
            ],
    descripcion: ['']

  });



  }

}
