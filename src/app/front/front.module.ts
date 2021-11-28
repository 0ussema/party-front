import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import {SharedModule} from '../shared/shared.module';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfilComponent,
    AccueilComponent

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule

  ]
})
export class FrontModule { }
