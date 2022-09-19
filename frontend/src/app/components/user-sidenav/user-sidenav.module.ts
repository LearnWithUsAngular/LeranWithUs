import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSidenavRoutingModule } from './user-sidenav-routing.module';
import { UserSidenavComponent } from './user-sidenav.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';

@NgModule({
  declarations: [ UserSidenavComponent ],
  imports: [
    CommonModule,
    UserSidenavRoutingModule,
    AngularMaterialsModule
  ],
  exports: [
    UserSidenavComponent
  ]

})
export class UserSidenavModule { }
