import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirtimePageRoutingModule } from './airtime-routing.module';

import { AirtimePage } from './airtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AirtimePageRoutingModule
  ],
  declarations: [AirtimePage]
})
export class AirtimePageModule {}
