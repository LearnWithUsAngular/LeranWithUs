import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListRoutingModule } from './course-list-routing.module';
import { CourseListComponent } from './course-list.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewListModule } from 'src/app/components/view-list/view-list.module';


@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    AngularMaterialsModule,
    NgxPaginationModule,
    ViewListModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
