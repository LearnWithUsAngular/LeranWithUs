import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { CategoryAdminComponent } from './category-admin.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [CategoryAdminComponent],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    AngularMaterialsModule,
  ]
})
export class CategoryAdminModule { }
