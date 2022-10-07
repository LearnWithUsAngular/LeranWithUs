import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorPasswordChangeComponent } from './instructor-password-change.component';

const routes: Routes = [{
  path: '',
  component: InstructorPasswordChangeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorPasswordChangeRoutingModule { }
