import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfractionFormPage } from './infraction-form.page';

const routes: Routes = [
  {
    path: '',
    component: InfractionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfractionFormPageRoutingModule {}
