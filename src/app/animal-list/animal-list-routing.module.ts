import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalListPage } from './animal-list.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalListPageRoutingModule {}
