import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onLogin() {

    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.success) {
          // Guardar el token de sesión
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
        }
      },
      (error: any) => {
        this.errorMessage = 'Error en el servidor. Inténtalo de nuevo más tarde.';
      }
    );
  }
}

