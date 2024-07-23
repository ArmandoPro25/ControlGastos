import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'; // Asegúrate de que la ruta es correcta
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  formData = {
    Nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    NumTelefono: '',
    Correo: '',
    FechaNacimiento: '',
    Usuario: '',
    Contrasena: '',
    confirmarContrasena: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.formData.Contrasena !== this.formData.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.userService.createUser(this.formData).subscribe(response => {
      alert('Usuario registrado con éxito');
      this.router.navigate(['/home-user']);
    }, error => {
      alert('Error al registrar usuario');
    });
  }
}
