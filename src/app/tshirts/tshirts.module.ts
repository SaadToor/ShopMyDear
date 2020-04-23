import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TShirtsPageRoutingModule } from './tshirts-routing.module';

import { TShirtsPage } from './tshirts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TShirtsPageRoutingModule
  ],
  declarations: [TShirtsPage]
})
export class TShirtsPageModule {}
