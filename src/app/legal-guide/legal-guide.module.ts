import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalGuidePageRoutingModule } from './legal-guide-routing.module';

import { LegalGuidePage } from './legal-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalGuidePageRoutingModule
  ],
  declarations: [LegalGuidePage]
})
export class LegalGuidePageModule {}
