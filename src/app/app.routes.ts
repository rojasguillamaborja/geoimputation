import { Routes } from '@angular/router';
import { LoginComponent } from './features/account/pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir la ruta raíz a /login
  { path: 'login', component: LoginComponent },
];
