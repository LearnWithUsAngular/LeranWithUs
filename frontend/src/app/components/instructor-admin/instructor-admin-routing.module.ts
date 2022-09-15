import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorAdminComponent } from './instructor-admin.component';

const routes: Routes = [{
  path: '',
  component: InstructorAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorAdminRoutingModule { }
