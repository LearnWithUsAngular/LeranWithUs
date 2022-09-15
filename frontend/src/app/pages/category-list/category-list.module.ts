import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListRoutingModule } from './category-list-routing.module';
import { CategoryListComponent } from './category-list.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    AngularMaterialsModule,
    NgxPaginationModule
  ]
})
export class CategoryListModule { }
