import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalFormsPage } from './animal-forms.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalFormsPageRoutingModule {}
