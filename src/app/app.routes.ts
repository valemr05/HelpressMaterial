import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceFormComponent } from './service-form/service-form.component';

export const routes: Routes = [
 { path: '', component: HomeComponent }, 
  {
    path: '**', redirectTo: ''
  }
];
