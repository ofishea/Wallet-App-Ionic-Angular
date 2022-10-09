import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendToUserPage } from './send-to-user.page';

const routes: Routes = [
  {
    path: '',
    component: SendToUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendToUserPageRoutingModule {}
