import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialsModule } from '../angular-materials.module';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TooltipModule } from 'ng2-tooltip-directive';
import { PopupComponent } from '../components/popup/popup.component';


@NgModule({
  declarations: [HomeComponent, PopupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialsModule,
    IvyCarouselModule,
    CarouselModule,
    TooltipModule
  ]
})
export class HomeModule { }
