import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalFormsPageRoutingModule } from './animal-forms-routing.module';

import { AnimalFormsPage } from './animal-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalFormsPageRoutingModule
  ],
  declarations: [AnimalFormsPage]
})
export class AnimalFormsPageModule {}
