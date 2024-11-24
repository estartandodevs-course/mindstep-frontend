import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login:', this.email, this.password);
    // Adicionar lógica de autenticação
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); // Rota para a tela de cadastro
  }
}
