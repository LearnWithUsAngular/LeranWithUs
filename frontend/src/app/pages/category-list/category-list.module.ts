import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListRoutingModule } from './category-list-routing.module';
import { CategoryListComponent } from './category-list.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewListModule } from 'src/app/components/view-list/view-list.module';


@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    AngularMaterialsModule,
    NgxPaginationModule,
    ViewListModule
  ]
})
export class CategoryListModule { }
