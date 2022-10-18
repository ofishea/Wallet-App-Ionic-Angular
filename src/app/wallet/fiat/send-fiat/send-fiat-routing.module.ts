import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFiatPage } from './send-fiat.page';
import { SendToUserPage } from './send-to-user/send-to-user.page';
import { AirtimePage } from './airtime/airtime.page';


const routes: Routes = [
  { path: '', component: SendFiatPage},
  { path: 'send-to-user', component: SendToUserPage },
  { path: 'airtime', component: AirtimePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFiatPageRoutingModule {}
