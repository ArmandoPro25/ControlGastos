import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateAccountComponent } from './components/auth/create-account/create-account.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home-user',
    component: HomeUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'change-pass',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
