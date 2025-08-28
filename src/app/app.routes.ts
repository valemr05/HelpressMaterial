import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceFormComponent } from './service-form/service-form.component';

export const routes: Routes = [
 { path: '', component: ServiceFormComponent }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'service-form',
    component: ServiceFormComponent
  }
];
