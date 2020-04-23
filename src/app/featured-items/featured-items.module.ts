import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedItemsPageRoutingModule } from './featured-items-routing.module';

import { FeaturedItemsPage } from './featured-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedItemsPageRoutingModule
  ],
  declarations: [FeaturedItemsPage]
})
export class FeaturedItemsPageModule {}
