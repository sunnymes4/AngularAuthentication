import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesModule } from './pages/pages.module';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  

  { 
    path:'auth', 
    children:[
      {
        path : '', component:LoginComponent
      }
    ] 
  },
  {
    path:'pages',
    component: PagesComponent,
    loadChildren:() => PagesModule
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  { 
    path: '**', redirectTo: 'auth' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
