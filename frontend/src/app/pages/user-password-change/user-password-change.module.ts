import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPasswordChangeRoutingModule } from './user-password-change-routing.module';
import { UserPasswordChangeComponent } from './user-password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { UserSidenavModule } from 'src/app/components/user-sidenav/user-sidenav.module';

@NgModule({
  declarations: [ UserPasswordChangeComponent ],
  imports: [
    CommonModule,
    UserPasswordChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
    UserSidenavModule
  ]
})
export class UserPasswordChangeModule { }
