import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { CategoryAdminComponent } from './category-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { AdminSidenavModule } from '../admin-sidenav/admin-sidenav.module';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@NgModule({
  declarations: [CategoryAdminComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    AngularMaterialsModule,
    AdminSidenavModule
  ]
})
export class CategoryAdminModule { }
