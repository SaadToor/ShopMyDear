import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoodiesPage } from './hoodies.page';

const routes: Routes = [
  {
    path: '',
    component: HoodiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoodiesPageRoutingModule {}
