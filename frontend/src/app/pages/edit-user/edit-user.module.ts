import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule
  ]
})
export class EditUserModule { }
