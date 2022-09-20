import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorListRoutingModule } from './instructor-list-routing.module';
import { InstructorListComponent } from './instructor-list.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { DeleteInstructorComponent } from 'src/app/components/delete-instructor/delete-instructor.component';


@NgModule({
  declarations: [InstructorListComponent,DeleteInstructorComponent],
  imports: [
    CommonModule,
    InstructorListRoutingModule,
    AngularMaterialsModule
  ]
})
export class InstructorListModule { }
