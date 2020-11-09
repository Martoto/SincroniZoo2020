import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalListPageRoutingModule } from './animal-list-routing.module';

import { AnimalListPage } from './animal-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalListPageRoutingModule
  ],
  declarations: [AnimalListPage]
})
export class AnimalListPageModule {}
