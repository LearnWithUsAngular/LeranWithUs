import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    AngularMaterialsModule,
    MatExpansionModule
  ]
})
export class DetailModule { }
