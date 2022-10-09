import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendToUserPageRoutingModule } from './send-to-user-routing.module';

import { SendToUserPage } from './send-to-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SendToUserPageRoutingModule
  ],
  declarations: [SendToUserPage]
})
export class SendToUserPageModule {}
