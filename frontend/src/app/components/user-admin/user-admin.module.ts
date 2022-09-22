import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserAdminComponent } from './user-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { AdminSidenavModule } from '../admin-sidenav/admin-sidenav.module';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
@NgModule({
  declarations: [UserAdminComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    AngularMaterialsModule,
    AdminSidenavModule
  ]
})
export class UserAdminModule { }
