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

 getMenu() {

  return [

    {
      descripcion: 'Dashboard',
      link: '/pages/dashboard',
      icon: 'fas fa-tachometer-alt',
      child: false,
      childrens: []

    },

    {
      descripcion: 'Biblioteca',
      link: '',
      icon: 'fas fa-book-open',
      child: true,
      childrens: [
        {
          descripcion: 'Areas',
          link: '/pages/biblioteca/areas'
        },
        {
          descripcion: 'Autores',
          link: '/pages/biblioteca/autores'
        },
        {
          descripcion: 'Editoriales',
          link: '/pages/biblioteca/editorial'
        },
        {
          descripcion: 'Generos',
          link: '/pages/biblioteca/generos'
        },
        {
          descripcion: 'Libros',
          link: '/pages/biblioteca/libros'
        },
      ]
    },
    {
      descripcion: 'Academico',
      link: '',
      icon: 'fas fa-book-reader',
      child: true,
      childrens: [
        {
          descripcion: 'Aulas',
          link: '/pages/academico/aulas'
        },
        {
          descripcion: 'Docentes',
          link: '/pages/academico/docentes'
        },
        {
          descripcion: 'Estudiantes',
          link: '/pages/academico/estudiantes'
        },
        {
          descripcion: 'Grados',
          link: '/pages/academico/grados'
        },
        {
          descripcion: 'Materias',
          link: '/pages/academico/materias'
        }
      ]
    },
    {
      descripcion: 'Administracion',
      link: '',
      icon: 'fas fa-users-cog',
      child: true,
      childrens: [
        {
          descripcion: 'Modulos',
          link: '/pages/administracion/modulos',
        },
        {
          descripcion: 'Roles',
          link: '/pages/administracion/roles',
        },
        {
          descripcion: 'Usuarios',
          link: '/pages/administracion/usuarios',
        }
        ]
    }
  ];
}


}
