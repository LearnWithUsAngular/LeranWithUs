import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    AngularMaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactusModule { }
