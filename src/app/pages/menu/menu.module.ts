import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuPage],
  imports: [
  IonicModule,
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuPageModule {}
