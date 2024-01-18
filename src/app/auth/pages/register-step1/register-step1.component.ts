import { Component } from '@angular/core';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.component.html',
})
export class RegisterStep1Component {
  currentStep: string = 'personal';

  nextStep() {
    // Lógica para avanzar al siguiente paso
    this.currentStep = (this.currentStep === 'personal') ? 'contacto' : 'final';
  }
}
