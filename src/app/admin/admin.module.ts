import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';



@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    LayoutComponent  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule
  ]
})
export class AdminModule { }
