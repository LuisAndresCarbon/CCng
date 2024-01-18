import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  @ViewChild('sidebar') sidebar!: Sidebar;
  constructor(private router: Router){}

  public sidebarItems=[
    {label:'listado', icon: 'pi-eye', url:'./list'},
    {label:'new', icon: 'pi-plus', url:'./new-project'},
    {label:'search', icon: 'pi-search', url:'./search'}
  ]
  logOut(){
    sessionStorage.clear()
    this.router.navigate(["/auth/login"]);
  }
  public toggleSidenav(sidebar: any): void {
    sidebar.toggle();
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
