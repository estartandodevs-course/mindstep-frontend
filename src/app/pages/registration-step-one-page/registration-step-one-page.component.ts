import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-step-one-page',
  templateUrl: './registration-step-one-page.component.html',
  styleUrls: ['./registration-step-one-page.component.scss'],
})
export class RegistrationStepOnePageComponent {
  currentStep = 1; // Controla o step atual

  registrationData = {
    fullName: '',
    email: '',
    password: '',
    birthDate: '',
    phone: '',
    state: '',
    city: '',
    education: '',
    learningChallenges: '',
    supportTools: '',
  };

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$';
  passwordPattern = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formatDateInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length > 4) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
    }

    input.value = value;
  }

  formatPhone(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 2 && value.length <= 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }

    input.value = value;
  }

  goToNextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log('Dados enviados:', this.registrationData);
    alert('Cadastro finalizado com sucesso!');
  }
}
