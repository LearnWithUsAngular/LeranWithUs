import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudInstructorRoutingModule } from './crud-instructor-routing.module';
import { CrudInstructorComponent } from './crud-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [CrudInstructorComponent],
  imports: [
    CommonModule,
    CrudInstructorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule
  ]
})
export class CrudInstructorModule { }
