import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfractorFormsPageRoutingModule } from './infractor-forms-routing.module';

import { InfractorFormsPage } from './infractor-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfractorFormsPageRoutingModule
  ],
  declarations: [InfractorFormsPage]
})
export class InfractorFormsPageModule {}
