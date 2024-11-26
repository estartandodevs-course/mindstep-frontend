import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-step-one-page',
  templateUrl: './registration-step-one-page.component.html',
  styleUrls: ['./registration-step-one-page.component.scss'],
})
export class RegistrationStepOnePageComponent {
  registrationData = {
    fullName: '',
    email: '',
    password: '',
    birthDate: '',
    phone: '',
    state: '',
    city: '',
    education: '',
  };

  currentStep = 1;

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.registrationData.fullName && this.registrationData.email && this.registrationData.password) {
      if (this.currentStep < 3) {
        this.currentStep++;
      } else {
        console.log('Dados enviados:', this.registrationData);
        this.router.navigate(['/registration-step-two']);
      }
    } else {
      console.log('Por favor, preencha os campos obrigatórios.');
    }
  }
}
