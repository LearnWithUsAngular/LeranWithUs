import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { CourseDetailComponent } from 'src/app/components/course-detail/course-detail.component';
import { CourseUploadComponent } from 'src/app/components/course-upload/course-upload.component';
import { PricingPromotionComponent } from 'src/app/components/pricing-promotion/pricing-promotion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    CreateCourseComponent,
    CourseDetailComponent,
    CourseUploadComponent,
    PricingPromotionComponent
  ],
  imports: [
    CommonModule,
    CreateCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
    DragDropModule

  ]
})
export class CreateCourseModule { }
