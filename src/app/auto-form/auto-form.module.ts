import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoFormPageRoutingModule } from './auto-form-routing.module';

import { AutoFormPage } from './auto-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoFormPageRoutingModule
  ],
  declarations: [AutoFormPage]
})
export class AutoFormPageModule {}
