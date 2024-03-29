import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';
import {ListasModule} from "./listas/listas.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ListasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
