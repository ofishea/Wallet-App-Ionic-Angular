import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { ProfilePage } from './profile';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule), canActivate: [AuthGuard], data: { roles: [Role.Admin] }
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'escrow-list',
    loadChildren: () => import('./escrow-list/escrow-list.module').then( m => m.EscrowListPageModule)
  },
  {
    path: 'create-escrow',
    loadChildren: () => import('./create-escrow/create-escrow.module').then( m => m.CreateEscrowPageModule)
  },
  {
    path: 'otpphoneinput',
    loadChildren: () => import('./otpphoneinput/otpphoneinput.module').then( m => m.OtpphoneinputPageModule)
  },
  {
    path: 'otpinput',
    loadChildren: () => import('./otpinput/otpinput.module').then( m => m.OtpinputPageModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'deals/mydeals',
    loadChildren: () => import('./deals/mydeals/mydeals.module').then( m => m.MydealsPageModule)
  },
  {
    path: 'deals/deal',
    loadChildren: () => import('./deals/deal/deal.module').then( m => m.DealPageModule)
  },
  {
    path: 'deals/create-deal',
    loadChildren: () => import('./deals/create-deal/create-deal.module').then( m => m.CreateDealPageModule)
  },
  {
    path: 'deals/create-deal/public',
    loadChildren: () => import('./deals/create-deal/public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'deals/create-deal/private',
    loadChildren: () => import('./deals/create-deal/private/private.module').then( m => m.PrivatePageModule)
  },
  {
    path: 'deals/mydeals/public',
    loadChildren: () => import('./deals/mydeals/public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'deals/mydeals/private',
    loadChildren: () => import('./deals/mydeals/private/private.module').then( m => m.PrivatePageModule)
  },
  {
    path: 'deals/settings',
    loadChildren: () => import('./deals/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'deals/settings/about',
    loadChildren: () => import('./deals/settings/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'deals/settings/earnings',
    loadChildren: () => import('./deals/settings/earnings/earnings.module').then( m => m.EarningsPageModule)
  },
  {
    path: 'deals/settings/messages',
    loadChildren: () => import('./deals/settings/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'deals/settings/requests',
    loadChildren: () => import('./deals/settings/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'deals/settings/saved',
    loadChildren: () => import('./deals/settings/saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'detailed',
    loadChildren: () => import('./detailed/detailed.module').then( m => m.DetailedPageModule)
  },
  {
    path: 'pricealerts',
    loadChildren: () => import('./pricealerts/pricealerts.module').then( m => m.PricealertsPageModule)
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
    path: 'insight',
    loadChildren: () => import('./insight/insight.module').then( m => m.InsightPageModule)
  },
  {
    path: 'insightdetails',
    loadChildren: () => import('./insightdetails/insightdetails.module').then( m => m.InsightdetailsPageModule)
  },
  {
    path: 'wallet/fiat/withdraw',
    loadChildren: () => import('./wallet/fiat/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./compare/compare.module').then( m => m.ComparePageModule)
  },
  {
    path: 'paybycard',
    loadChildren: () => import('./paybycard/paybycard.module').then( m => m.PaybycardPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./modals/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'p2p/myp2p',
    loadChildren: () => import('./p2p/myp2p/myp2p.module').then( m => m.Myp2pPageModule)
  },
  {
    path: 'p2p/postp2p',
    loadChildren: () => import('./p2p/postp2p/postp2p.module').then( m => m.Postp2pPageModule)
  },
  {
    path: 'p2p/p2pchat',
    loadChildren: () => import('./p2p/p2pchat/p2pchat.module').then( m => m.P2pchatPageModule)
  },
  {
    path: 'profile/bank-accounts/addbank',
    loadChildren: () => import('./profile/bank-accounts/addbank/addbank.module').then( m => m.AddbankPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'basic-verification',
    loadChildren: () => import('./basic-verification/basic-verification.module').then( m => m.BasicVerificationPageModule)
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'profile' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
