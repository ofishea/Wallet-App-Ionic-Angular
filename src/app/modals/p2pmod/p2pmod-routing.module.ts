import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2pmodPage } from './p2pmod.page';

const routes: Routes = [
  {
    path: '',
    component: P2pmodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2pmodPageRoutingModule {}
