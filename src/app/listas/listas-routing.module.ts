import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaDetalhadaComponent} from "./lista-detalhada/lista-detalhada.component";

const routes: Routes = [
  {
    path:'',
    component:ListaDetalhadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasRoutingModule { }
