import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryAdminRoutingModule } from './subcategory-admin-routing.module';
import { SubcategoryAdminComponent } from './subcategory-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { AdminSidenavModule } from '../admin-sidenav/admin-sidenav.module';
@NgModule({
  declarations: [SubcategoryAdminComponent],
  imports: [
    CommonModule,
    SubcategoryAdminRoutingModule,
    AngularMaterialsModule,
    AdminSidenavModule
  ]
})
export class SubcategoryAdminModule { }
