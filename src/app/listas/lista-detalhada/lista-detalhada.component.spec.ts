import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalhadaComponent } from './lista-detalhada.component';

describe('ListaDetalhadaComponent', () => {
  let component: ListaDetalhadaComponent;
  let fixture: ComponentFixture<ListaDetalhadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDetalhadaComponent]
    });
    fixture = TestBed.createComponent(ListaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
