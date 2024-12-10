import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-step-one-page',
  templateUrl: './registration-step-one-page.component.html',
  styleUrls: ['./registration-step-one-page.component.scss'],
})
export class RegistrationStepOnePageComponent {
  currentStep = 1;

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
    focusActivities: '',
    learningStyle: '',
    neurodivergent: '',
  };

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  passwordPattern = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  learningStyleOptions = [
    { label: 'Visual', value: 'visual' },
    { label: 'Auditivo', value: 'auditory' },
    { label: 'Cinestésico', value: 'kinesthetic' },
  ];

  neurodivergentOptions = [
    { label: 'Sim', value: 'yes' },
    { label: 'Não', value: 'no' },
  ];

  learningChallengesOptions = [
    { label: 'Dificuldade de concentração', value: 'concentration' },
    { label: 'Dificuldade em organizar tarefas', value: 'organization' },
    { label: 'Dificuldade de memória', value: 'memory' },
    { label: 'Outro', value: 'other' },
  ];

  focusActivitiesOptions = [
    { label: 'Ouvir música', value: 'music' },
    { label: 'Exercícios físicos', value: 'exercise' },
    { label: 'Meditação', value: 'meditation' },
    { label: 'Outro', value: 'other' },
  ];

  formatDateInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length > 4) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
    }

    input.value = value;
  }

  formatPhone(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

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

  onBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log('Dados enviados:', this.registrationData);
    alert('Cadastro finalizado com sucesso!');
  }
}
