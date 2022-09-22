import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { CourseAdminComponent } from './course-admin.component';
import { AdminSidenavModule } from '../admin-sidenav/admin-sidenav.module';
@NgModule({
  declarations: [CourseAdminComponent],
  imports: [
    CommonModule,
    CourseAdminRoutingModule,
    AngularMaterialsModule,
    AdminSidenavModule
  ]
})
export class CourseAdminModule { }
