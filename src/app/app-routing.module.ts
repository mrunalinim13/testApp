import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'custom-popup',
    loadChildren: () => import('./pages/custom-popup/custom-popup.module').then( m => m.CustomPopupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {
    path: 'rate-card',
    loadChildren: () => import('./pages/rate-card/rate-card.module').then( m => m.RateCardPageModule)
  },
  {
    path: 'add-info',
    loadChildren: () => import('./pages/add-info/add-info.module').then( m => m.AddInfoPageModule)
  },
 
  { path: 'create', loadChildren: './pages/create/create.module#CreatePageModule' },
  { path: 'detail/:key', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'edit/:key', loadChildren: './pages/edit/edit.module#EditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
