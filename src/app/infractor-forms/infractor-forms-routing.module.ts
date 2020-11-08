import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfractorFormsPage } from './infractor-forms.page';

const routes: Routes = [
  {
    path: '',
    component: InfractorFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfractorFormsPageRoutingModule {}
