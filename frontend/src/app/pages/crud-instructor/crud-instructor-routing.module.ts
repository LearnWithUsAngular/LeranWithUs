import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudInstructorComponent } from './crud-instructor.component';

const routes: Routes = [{
  path: '',
  component: CrudInstructorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudInstructorRoutingModule { }
