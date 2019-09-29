import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public menu = [];

  constructor() { }

  ngOnInit() {

    this.menu = this.getMenu();

  }

  /**
   * Retorna la estructura del Menu
   */

  getMenu(){

    return [
      
      {
        descripcion: 'Dashboard',
        link: '/pages/dashboard',
        child: false,
        childrens: []

      },

      {
        descripcion: 'Biblioteca',
        link: '',
        child: true,
        childrens: [

          {
            descripcion: 'Autores',
            link: '/pages/biblioteca/autores'

          },

          {
            descripcion: 'Editoriales',
            link: '/pages/biblioteca/editorial'

          },

          {
            descripcion: 'Libros',
            link: '/pages/biblioteca/libro'  
          }

        ]

      },

      {

        descripcion:'Academico',
        link:'',
        child: true,
        childrens:[
          {
            descripcion: 'Aulas',
            link:'/academico/components/aulas'
          },

          {
            descripcion:'Docentes',
            link:'/academico/components/docentes'
          },


          {
            descripcion: 'Estudiantes',
            link:'/academico/components/estudiantes'
          },

          {
            descripcion: 'Grados',
            link:'/academico/components/grados'
          },

          {
            descripcion: 'Materias',
            link:'/academico/components/materias'
          },

        ],
      },

      {

        descripcion:'Administracion',
        link:'',
        child: true,
        childrens:[
          
          {

            descripcion:'Modulos',
            link:'/administracion/components/modulos',

          },

          {

            descripcion:'Roles',
            link:'/administracion/components/roles',

          },

          {

            descripcion:'Usuarios',
            link:'/administracion/components/usuarios',

          }
           
          ]

      }




      
    ];

  }

}
