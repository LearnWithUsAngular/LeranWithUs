import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';

const routes: Routes = [{
  path: '',
  component: SearchComponent
}];

const MyDefaultTooltipOptions: TooltipOptions = {
  'show-delay': 500
}

@NgModule({
  imports: [RouterModule.forChild(routes),
    TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
