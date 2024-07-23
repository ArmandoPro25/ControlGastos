import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (resp: any) => {
        this.users = resp.user;
      },
      err => console.log(err)
    );
  }

  onSubmit() {
    const user = this.users.find(u => u.Usuario === this.username);
    if (!user) {
      this.errorMessage = 'El usuario no existe';
      return;
    }
    if (user.Contrasena !== this.password) {
      this.errorMessage = 'La contraseña es incorrecta';
      return;
    }
    this.router.navigate(['/home-user']);
  }
}
