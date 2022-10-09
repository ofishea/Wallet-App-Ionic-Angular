import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPreviewPageRoutingModule } from './buy-preview-routing.module';

import { BuyPreviewPage } from './buy-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPreviewPageRoutingModule
  ],
  declarations: [BuyPreviewPage]
})
export class BuyPreviewPageModule {}
