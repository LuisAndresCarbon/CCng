
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlertaComponent } from 'src/app/util/alerta.component';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ],
  providers: [
    MessageService, // Agrega MessageService como un proveedor aquí
  ],
})
export class LoginPageComponent implements OnInit{
  constructor(private usuarioservice : UsuarioService, private router: Router,private messageService: MessageService,){}
  mensajeAlerta!: AlertaComponent
  usuario_email: string = '';
  usuario_pw: string = '';
  errorMessage: string = '';

  submitted: boolean = false;
  loginError: boolean = false;


  ngOnInit(){
      sessionStorage.getItem('access') ? this.router.navigate(["/proyectos/list"]) : this.router.navigate(["/auth/login"]) ;
 
  }


  iniciarSesion(form: NgForm) {
    this.submitted = true;
  
    if (form.valid) {
      this.usuarioservice.iniciarSesion(this.usuario_email, this.usuario_pw)
        .subscribe(
          response => {
            if (response && response.access) {
              // La respuesta fue exitosa (estado 2xx)
              console.log('Inicio de sesión exitoso:', response);
              sessionStorage.setItem('access',response.refresh);
              this.router.navigate(["/proyectos/list"]);
              // Mostrar mensaje de éxito con MatSnackBar
              this.messageService.add({ severity: 'error', summary: 'No es posible ingresar', detail: 'Porfavor verifique todos los campos' });
             
  
              // Limpiar mensaje de error
              this.loginError = false;
              this.errorMessage = '';
            } else {
              // La respuesta no es válida (por ejemplo, credenciales incorrectas)
              console.log('Error en el inicio de sesión:', response);
              this.loginError = true;
              this.errorMessage = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
            }
  
            // Reiniciar el formulario y otras variables necesarias
            form.resetForm();
            this.submitted = false;
          },
          error => {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error(error);
            this.loginError = true;
            let mensaje = <any>error;
        this.mensajeAlerta.alerta("AVISO", "", mensaje.message, "");
          }
          
        );
      
    }

  }
}