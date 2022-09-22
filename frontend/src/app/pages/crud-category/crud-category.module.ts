import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudCategoryRoutingModule } from './crud-category-routing.module';
import { CrudCategoryComponent } from './crud-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [CrudCategoryComponent],
  imports: [
    CommonModule,
    CrudCategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
    DragDropModule
  ]
})
export class CrudCategoryModule { }
