import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRestaurantPage } from './edit-restaurant.page';

import { ComponentsSharedModule } from '../../../shared';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsSharedModule,
    IonicModule.forRoot()
  ],
  exports: [
    EditRestaurantPage
  ],
  declarations: [EditRestaurantPage]
})
export class EditRestaurantPageModule {}
