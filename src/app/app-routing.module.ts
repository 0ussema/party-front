import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {path:'' , redirectTo: 'login',pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: 'principal' , loadChildren:() => import('../app/front/front.module').then(x => x.FrontModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegistrationComponent},
  {path:'**' , redirectTo: 'login',pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
