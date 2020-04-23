import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccountInformationPage } from './account-information.page';

const routes: Routes = [
  {
    path: '',
    component: AccountInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class AccountInformationPageRoutingModule {}
