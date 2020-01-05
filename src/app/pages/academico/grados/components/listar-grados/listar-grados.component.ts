import {Component, Input, OnInit, DoCheck, Output, EventEmitter} from '@angular/core';
import {CategoryGradeService} from "@data/category-grade.service";
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-listar-grados',
  templateUrl: './listar-grados.component.html',
  styleUrls: ['./listar-grados.component.css']
})
export class ListarGradosComponent implements OnInit, DoCheck {
  @Input() recibe: boolean;
  @Output() emitirid: EventEmitter<number> = new EventEmitter<number>();

  protected gridAreas: GridOptions;
  categories: any;
  protected  categorySelect = 0;
  constructor(private gradeServices: CategoryGradeService) {

  this.gridAreas = <GridOptions> {};
  this.gridAreas.columnDefs = this.columnsDefinition();

  }


  columnsDefinition() {
    return [
      { headerName: 'Codigo',
        field: 'id',
        colId: 'id',
        sortable: true,
        filter: true
      },
      { headerName: 'Grados',
        field: 'description',
        coldId: 'description'
      },
    ];
  }

  ngOnInit() {
    this.getGrados();
  }

  ngDoCheck() {
    if(this.recibe) {
      this.getGrados();
    }
  }

  getGrados() {
    this.gradeServices.getCategoryGrades().subscribe( data => {
      this.categories = data;
      this.cargarDatos(data);

    });

  }

  cargarDatos( data ) {
    this.gridAreas.api.setRowData(data);
  }

  private selectRow( event) {
    this.categorySelect = event.data.id;
    this.emitirid.emit(this.categorySelect);
  }

  editGrade() {
  //this.categorySelect = event.data.id
  alert('Seleccion doble');

  }


}
