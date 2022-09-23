import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { AdminSidenavModule } from 'src/app/components/admin-sidenav/admin-sidenav.module';
@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    AngularMaterialsModule,
    ChartModule,
    AdminSidenavModule
  ],
  providers: [CategoryService, ColumnSeriesService]
})
export class AdminDashboardModule { }
