import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path:'login',
    loadChildren:() =>import('./usuarios/usuarios.module')
        .then((m)=>m.UsuariosModule)

  },
  {
    path:'listas',
    loadChildren:() =>import('./listas/listas.module')
        .then((m)=>m.ListasModule)

  },
  {
    path: '',
    component: HomeComponent
  },

  {  path: '**',
    component: NotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
