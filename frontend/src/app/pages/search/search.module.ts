import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    SearchRoutingModule,
    NgxPaginationModule,
    CarouselModule
  ]
})
export class SearchModule { }
