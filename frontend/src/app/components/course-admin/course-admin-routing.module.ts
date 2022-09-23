import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAdminComponent } from './course-admin.component';

const routes: Routes = [{
  path: '',
  component: CourseAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAdminRoutingModule { }
