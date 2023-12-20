import { Component, OnInit } from '@angular/core';
import { ProjectUsuarioService } from '../../services/project.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{


  public usuarios: any[] = [];
  constructor(private projectusuarioservice : ProjectUsuarioService){}
  ngOnInit(): void {
    this.projectusuarioservice.getUsers()
    .subscribe(usuarios => this.usuarios = usuarios)
  }
}
