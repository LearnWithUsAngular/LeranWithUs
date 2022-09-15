import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCoursesRoutingModule } from './user-courses-routing.module';
import { UserCoursesComponent } from './user-courses.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';

@NgModule({
  declarations: [ UserCoursesComponent ],
  imports: [
    CommonModule,
    UserCoursesRoutingModule,
    AngularMaterialsModule
  ]
})
export class UserCoursesModule { }
