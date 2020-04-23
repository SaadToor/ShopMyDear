import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FeaturedItemsPage } from '../featured-items/featured-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: '',
        component: FeaturedItemsPage
      }
    ])
  ],
  declarations: [HomePage, FeaturedItemsPage]
})


export class HomePageModule {}
