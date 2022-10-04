import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    DetailComponent,
    RatingDialogComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    AngularMaterialsModule,
    NgxStarRatingModule,
  ]
})
export class DetailModule { }
