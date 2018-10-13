import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantPage } from './add-restaurant.page';

import { ComponentsSharedModule } from '../../../shared';

const routes: Routes = [
  {
    path: '',
    component: AddRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
