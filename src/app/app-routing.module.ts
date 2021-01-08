import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ListretailersComponent } from './listretailers/listretailers.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent,
  children:[{
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {path:'default',component:DefaultComponent},{
      path:'listretailers',component:ListretailersComponent
    }]
  }] 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
