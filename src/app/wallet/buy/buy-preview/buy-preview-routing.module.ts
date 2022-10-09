import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPreviewPage } from './buy-preview.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPreviewPageRoutingModule {}
