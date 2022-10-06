import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorPasswordChangeRoutingModule } from './instructor-password-change-routing.module';
import { InstructorPasswordChangeComponent } from './instructor-password-change.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InstructorPasswordChangeComponent
  ],
  imports: [
    CommonModule,
    InstructorPasswordChangeRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InstructorPasswordChangeModule { }
