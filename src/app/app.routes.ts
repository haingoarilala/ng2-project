import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch : 'full'},
   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'signin', component: SignupComponent },
]

export const routing = RouterModule.forRoot(routes);