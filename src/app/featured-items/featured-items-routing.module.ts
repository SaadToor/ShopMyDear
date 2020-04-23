import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedItemsPage } from './featured-items.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedItemsPageRoutingModule {}
