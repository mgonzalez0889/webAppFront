import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-autores',
  templateUrl: './crud-autores.component.html',
  styleUrls: ['./crud-autores.component.css']
})
export class CrudAutoresComponent implements OnInit {
    // 1) declarar prpiead tipo formsgrup
    public autores: FormGroup;

    // 2) inyectar form buider en el constructor
    constructor(private fb: FormBuilder) {
      this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
      this.autores = this.fb.group({
        codigo: ['',
          Validators.required,
          Validators.maxLength(5)
        ],
        autores: ['']

      });

    }

  }
