import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInstructorProfileComponent } from './edit-instructor-profile.component';

const routes: Routes = [{
  path: '',
  component: EditInstructorProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditInstructorProfileRoutingModule { }
