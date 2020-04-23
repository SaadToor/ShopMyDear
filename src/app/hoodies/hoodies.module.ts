import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoodiesPageRoutingModule } from './hoodies-routing.module';

import { HoodiesPage } from './hoodies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoodiesPageRoutingModule
  ],
  declarations: [HoodiesPage]
})
export class HoodiesPageModule {}
