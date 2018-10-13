import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewsPage } from './reviews.page';

import { ComponentsSharedModule, SharedPipesModule } from '../../shared';

const routes: Routes = [
  {
    path: '',
    component: ReviewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsSharedModule,
    SharedPipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewsPage]
})
export class ReviewsPageModule {}
