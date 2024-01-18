import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  constructor( private router: Router){}
  currentStep: string = 'personal';
  nextStep() {
    // Lógica para avanzar al siguiente paso
    this.currentStep = (this.currentStep === 'personal') ? 'contacto' : 'final';
  }
  finishRegistration() {
    // Lógica para finalizar el registro
    // Puedes realizar cualquier acción adicional antes de redirigir

    // Redirigir a /auth/login al finalizar
    this.router.navigate(['/auth/login']);
  }
}
