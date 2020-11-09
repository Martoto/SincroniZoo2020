import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfractionFormPageRoutingModule } from './infraction-form-routing.module';

import { InfractionFormPage } from './infraction-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfractionFormPageRoutingModule
  ],
  declarations: [InfractionFormPage]
})
export class InfractionFormPageModule {}
