import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListaFrontPageComponent } from './lista-front-page/lista-front-page.component';
import { ListaDetalhadaComponent } from './lista-detalhada/lista-detalhada.component';


@NgModule({
    declarations: [
        ListaFrontPageComponent,
        ListaDetalhadaComponent
    ],
    exports: [
        ListaFrontPageComponent
    ],
    imports: [
        CommonModule,
        ListasRoutingModule
    ]
})
export class ListasModule { }
