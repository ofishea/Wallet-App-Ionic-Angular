import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiveFiatPage } from './receive-fiat.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveFiatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiveFiatPageRoutingModule {}
