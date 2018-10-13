import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPage } from './restaurants.page';

import { ComponentsSharedModule, SharedPipesModule } from '../../../shared';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
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
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule {}
