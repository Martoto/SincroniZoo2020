import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalGuidePageRoutingModule } from './animal-guide-routing.module';

import { AnimalGuidePage } from './animal-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalGuidePageRoutingModule
  ],
  declarations: [AnimalGuidePage]
})
export class AnimalGuidePageModule {}
