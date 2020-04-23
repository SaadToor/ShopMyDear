import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TShirtsPage } from './tshirts.page';

const routes: Routes = [
  {
    path: '',
    component: TShirtsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TShirtsPageRoutingModule {}
