import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../prime-ng/prime-ng.module';
import { PortaPageComponent } from './pages/porta-page/porta-page.component';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';


@NgModule({
  declarations: [
    PortaPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MaterialModule
  ]
})
export class ProyectosModule { }
