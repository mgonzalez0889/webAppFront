import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-autores',
  templateUrl: './crud-autores.component.html',
  styleUrls: ['./crud-autores.component.css']
})
export class CrudAutoresComponent implements OnInit {

      // 1) declarar prpiead tipo formsgrup
    public autores: FormGroup;

    //Envia un evento al padre y este lo recibe para enviarselo a un metodo
    @Output() cancelar: EventEmitter<boolean> = new EventEmitter <boolean> ();

  // 2) inyectar form buider en el constructor
    constructor(private fb: FormBuilder) {
      this.createForm();

    }

    ngOnInit() {

    }

    createForm() {
      this.autores = this.fb.group({
        /*codigo: ['', [Validators.required, Validators.minLength(3)]
        ],*/
        nombreAutores: ['', [Validators.required,Validators.minLength(10)]
        ]

      });
    }

    saveAutores(values) {

    console.log(values);
    }



    cancelAction() {
      this.cancelar.emit(true);
    }





  }
