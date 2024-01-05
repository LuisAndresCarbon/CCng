import { Component, OnInit } from '@angular/core';
import { ProjectUsuarioService } from '../../services/project.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../app/auth/services/auth.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

   public refreshToken :  any = '';
  public usuarios: any[] = [];
  constructor(private projectusuarioservice : ProjectUsuarioService ,
     private router: Router, private usuarioservice : UsuarioService){}
  ngOnInit(): void {
   
      this.refreshToken = sessionStorage.getItem('access') ?  sessionStorage.getItem('access') :  this.router.navigate(["/auth/login"]);
      this.validarToken(this.refreshToken);
   }


   validarToken(token : string){
    this.usuarioservice.validToken(token)
    .subscribe(
      response => {
        let accesoToken = response.access;
        console.log("valido",accesoToken)
        this.getUsers(accesoToken);
      });
   }

   getUsers(accesoToken : string){
    console.log("segundo valido",accesoToken)
    this.projectusuarioservice.getUsers(accesoToken)
    .subscribe(usuarios => this.usuarios = usuarios)
   }
 
}
