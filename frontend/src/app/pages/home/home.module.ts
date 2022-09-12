import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialsModule } from '../../angular-materials.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialsModule,
    CarouselModule,
    TooltipModule
  ]
})
export class HomeModule { }
