import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrontPageComponent } from './lista-front-page.component';

describe('ListaFrontPageComponent', () => {
  let component: ListaFrontPageComponent;
  let fixture: ComponentFixture<ListaFrontPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFrontPageComponent]
    });
    fixture = TestBed.createComponent(ListaFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
