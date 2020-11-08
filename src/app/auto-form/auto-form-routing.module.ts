import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoFormPage } from './auto-form.page';

const routes: Routes = [
  {
    path: '',
    component: AutoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoFormPageRoutingModule {}
