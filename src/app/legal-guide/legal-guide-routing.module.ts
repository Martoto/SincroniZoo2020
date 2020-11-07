import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalGuidePage } from './legal-guide.page';

const routes: Routes = [
  {
    path: '',
    component: LegalGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalGuidePageRoutingModule {}
