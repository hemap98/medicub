import { constants } from 'os';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    {path: '',redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component:AppComponent},
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignupComponent}
]