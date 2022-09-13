import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    AngularMaterialsModule
  ]
})
export class UserprofileModule { }
