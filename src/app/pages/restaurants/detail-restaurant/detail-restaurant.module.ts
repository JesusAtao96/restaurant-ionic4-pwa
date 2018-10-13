import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailRestaurantPage } from './detail-restaurant.page';

import { ComponentsSharedModule, SharedPipesModule } from '../../../shared';

import { EditRestaurantPageModule } from '../edit-restaurant/edit-restaurant.module';
import { EditRestaurantPage } from './../edit-restaurant/edit-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRestaurantPage
  }
];

@NgModule({
  imports: [
  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsSharedModule,
    SharedPipesModule,
    EditRestaurantPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailRestaurantPage],
  entryComponents: [EditRestaurantPage]
})
export class DetailRestaurantPageModule {}
