import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSidenavRoutingModule } from './admin-sidenav-routing.module';
import { AdminSidenavComponent } from './admin-sidenav.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';

@NgModule({
  declarations: [ AdminSidenavComponent ],
  imports: [
    CommonModule,
    AdminSidenavRoutingModule,
    AngularMaterialsModule
  ],
  exports: [
    AdminSidenavComponent
  ]
})
export class AdminSidenavModule { }
