import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewsRestaurantPage } from './reviews-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewsRestaurantPage]
})
export class ReviewsRestaurantPageModule {}
