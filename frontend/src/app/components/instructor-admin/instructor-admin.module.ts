import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorAdminRoutingModule } from './instructor-admin-routing.module';
import { InstructorAdminComponent } from './instructor-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [InstructorAdminComponent],
  imports: [
    CommonModule,
    InstructorAdminRoutingModule,
    AngularMaterialsModule
  ]
})
export class InstructorAdminModule { }
