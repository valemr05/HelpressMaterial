import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
 { path: '', component: HomeComponent }, 
 { path: 'login', component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'services', component: ServicesComponent },
 { path: 'about', component: AboutComponent },
 { path: '**', redirectTo: '' }
];
