import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {UsersComponent} from './users/users.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ReportesComponent} from './reportes/reportes.component';
import {SalleComponent} from './salle/salle.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent ,children: [
      {path:'', component: AccueilComponent },
      {path:'users', component: UsersComponent },
      {path:'salles', component: SalleComponent },
      {path:'reportes', component: ReportesComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
