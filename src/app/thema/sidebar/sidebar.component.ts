import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
          link:'/pages/academico/aulas'
        },

        {
          descripcion:'Docentes',
          link:'/pages/academico/docentes'
        },

        {
          descripcion: 'Estudiantes',
          link:'/pages/academico/estudiantes'
        },

        {
          descripcion: 'Grados',
          link:'/pages/academico/grados'
        },

        {
          descripcion: 'Materias',
          link:'/pages/academico/materias'
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
          link:'/pages/administracion/modulos',

        },

        {

          descripcion:'Roles',
          link:'/pages/administracion/roles',

        },

        {

          descripcion:'Usuarios',
          link:'/pages/administracion/usuarios',

        }
         
        ]

    }
    
  ];

}


}
