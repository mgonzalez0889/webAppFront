import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  columDefs = [
    { headerName: 'Codigo', field: 'codigo', sortable: true, filter: true },
    { headerName: 'Nombre de Autor', field: 'nombre' },
  ];

  rowData = [
    {codigo: '001', nombre: 'Gabriel Garcia'  },
    {codigo: '002', nombre: 'Mario Vargas Llosa'  },
    {codigo: '003', nombre: 'Jorge Luis Borges'  },
    {codigo: '004', nombre: 'Julio Cortazar' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
