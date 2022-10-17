import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchDialogComponent } from 'src/app/components/search-dialog/search-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent,SearchDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    SearchRoutingModule,
    NgxPaginationModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule
  ]
})
export class SearchModule { }
