import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditInstructorProfileRoutingModule } from './edit-instructor-profile-routing.module';
import { EditInstructorProfileComponent } from './edit-instructor-profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EditInstructorProfileComponent
  ],
  imports: [
    CommonModule,
    EditInstructorProfileRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditInstructorProfileModule { }
