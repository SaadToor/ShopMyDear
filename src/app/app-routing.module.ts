import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'featured-items',
    loadChildren: () => import('./featured-items/featured-items.module').then( m => m.FeaturedItemsPageModule)
  },
  {
    path: 'tshirts',
    loadChildren: () => import('./tshirts/tshirts.module').then( m => m.TShirtsPageModule)
  },
  {
    path: 'hoodies',
    loadChildren: () => import('./hoodies/hoodies.module').then( m => m.HoodiesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account-information',
    loadChildren: () => import('./account-information/account-information.module').then( m => m.AccountInformationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
