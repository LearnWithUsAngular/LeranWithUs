import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAdminComponent } from './category-admin.component';

const routes: Routes = [{
  path: '',
  component: CategoryAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryAdminRoutingModule { }
