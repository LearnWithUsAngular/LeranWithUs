import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryAdminComponent } from './subcategory-admin.component';

const routes: Routes = [{
  path: '',
  component: SubcategoryAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryAdminRoutingModule { }
