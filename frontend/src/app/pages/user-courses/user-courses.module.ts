import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCoursesRoutingModule } from './user-courses-routing.module';
import { UserCoursesComponent } from './user-courses.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { UserSidenavModule } from 'src/app/components/user-sidenav/user-sidenav.module';
@NgModule({
  declarations: [ UserCoursesComponent ],
  imports: [
    CommonModule,
    UserCoursesRoutingModule,
    AngularMaterialsModule,
    UserSidenavModule
  ]
})
export class UserCoursesModule { }
