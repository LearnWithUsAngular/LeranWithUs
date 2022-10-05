import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorDashboardRoutingModule } from './instructor-dashboard-routing.module';
import { InstructorDashboardComponent } from './instructor-dashboard.component';


@NgModule({
  declarations: [
    InstructorDashboardComponent
  ],
  imports: [
    CommonModule,
    InstructorDashboardRoutingModule
  ]
})
export class InstructorDashboardModule { }
