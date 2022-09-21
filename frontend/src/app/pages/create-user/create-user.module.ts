import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';


@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule
  ]
})
export class CreateUserModule { }
