import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SalleComponent } from './salle/salle.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AccueilComponent,
    NavbarComponent,
    UsersComponent,
    ReportesComponent,
    SalleComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
