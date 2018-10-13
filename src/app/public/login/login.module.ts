import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { ComponentsSharedModule } from '../../shared';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
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
  declarations: [LoginPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginPageModule {}
