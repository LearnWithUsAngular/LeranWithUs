import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPasswordChangeComponent } from './user-password-change.component';

const routes: Routes = [
  {
    path : '',
    component : UserPasswordChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPasswordChangeRoutingModule { }
