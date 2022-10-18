import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'wallet/fiat/deposit/preview',
    loadChildren: () => import('./wallet/fiat/deposit/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'wallet/fiat/withdraw/preview',
    loadChildren: () => import('./wallet/fiat/withdraw/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'wallet/fiat/withdraw',
    loadChildren: () => import('./wallet/fiat/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'wallet' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
