import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalGuidePage } from './animal-guide.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalGuidePageRoutingModule {}
