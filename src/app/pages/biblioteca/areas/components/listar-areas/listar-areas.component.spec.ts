import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAreasComponent } from './listar-areas.component';

describe('ListarAreasComponent', () => {
  let component: ListarAreasComponent;
  let fixture: ComponentFixture<ListarAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
