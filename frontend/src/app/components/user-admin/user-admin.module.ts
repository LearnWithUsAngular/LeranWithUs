import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserAdminComponent } from './user-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [UserAdminComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    AngularMaterialsModule
  ]
})
export class UserAdminModule { }
