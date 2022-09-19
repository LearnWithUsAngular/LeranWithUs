import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { UserSidenavModule } from 'src/app/components/user-sidenav/user-sidenav.module';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    AngularMaterialsModule,
    UserSidenavModule
  ]
})
export class UserprofileModule { }
