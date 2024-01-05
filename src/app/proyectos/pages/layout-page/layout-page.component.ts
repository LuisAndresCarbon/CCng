import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  constructor(private router: Router){}

  public sidebarItems=[
    {label:'listado', icon: 'label', url:'./list'},
    {label:'new', icon: 'new', url:'./new-project'},
    {label:'search', icon: 'search', url:'./search'}
  ]
  logOut(){
    sessionStorage.clear()
    this.router.navigate(["/auth/login"]);
  }
}
