import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorDashboardRoutingModule } from './instructor-dashboard-routing.module';
import { InstructorDashboardComponent } from './instructor-dashboard.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    InstructorDashboardComponent
  ],
  imports: [
    CommonModule,
    InstructorDashboardRoutingModule,
    AngularMaterialsModule,
    NgxPaginationModule
  ]
})
export class InstructorDashboardModule { }
