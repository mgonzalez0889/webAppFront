import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-areas',
  templateUrl: './listar-areas.component.html',
  styleUrls: ['./listar-areas.component.css']
})
export class ListarAreasComponent implements OnInit {

  columDefs = [
    { headerName: 'Codigo', field: 'codigo', sortable: true, filter: true },
    { headerName: 'Areas', field: 'area' },
  ];

  rowData = [
    {codigo: '001', area: 'Gabriel Garcia'  },
    {codigo: '002', area: 'Mario Vargas Llosa'  },
    {codigo: '003', area: 'Jorge Luis Borges'  },
    {codigo: '004', area: 'Julio Cortazar' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
