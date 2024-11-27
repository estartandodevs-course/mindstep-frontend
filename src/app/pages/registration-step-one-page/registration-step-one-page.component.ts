import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-step-one-page',
  templateUrl: './registration-step-one-page.component.html',
  styleUrls: ['./registration-step-one-page.component.css'],
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

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$';
  passwordPattern = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';

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

  onSubmit() {
    console.log(this.registrationData);
  }
}
