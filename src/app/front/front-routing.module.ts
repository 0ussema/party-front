import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ProfilComponent} from './profil/profil.component';


const routes: Routes = [
  {path: '' , component: AccueilComponent, children: [
      {path:'accueil', component: AccueilComponent},
      {path:'profil', component: ProfilComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
