import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null; // Variable para almacenar el mensaje de error

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(loginForm: any) {
    const { username, password } = loginForm.value;

    if (!username || !password) {
      this.errorMessage = 'Los campos no pueden estar vacíos';
      return;
    }

    this.userService.getUsers().subscribe(users => {
      const user = users.find((user: any) => user.Usuario === username && user.Contrasena === password);

      if (user) {
        this.router.navigate(['/home-user']);
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos'; // Mensaje de error si el usuario o la contraseña son incorrectos
      }
    }, error => {
      this.errorMessage = 'Error al validar usuario'; // Manejo de errores del servidor
    });
  }
}
