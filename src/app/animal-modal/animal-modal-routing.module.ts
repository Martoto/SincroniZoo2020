import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AnimalModal } from "./animal-modal.page";

const routes: Routes = [
  {
    path: "",
    component: AnimalModal,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalModalRoutingModule {}
