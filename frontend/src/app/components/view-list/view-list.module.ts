import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewListRoutingModule } from './view-list-routing.module';
import { ViewListComponent } from './view-list.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule,
    ViewListRoutingModule,
    AngularMaterialsModule,
    NgxPaginationModule
  ],
  exports: [
    ViewListComponent
  ]
})
export class ViewListModule { }
