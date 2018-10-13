import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StartPage } from './start.page';

import { ComponentsSharedModule } from '../../shared';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("297605043339-epodk1tohieqso9nqcdgu7eukgk6mlrh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2268545880030357")
  }
]);

export function provideConfig() {
  return config;
}

const routes: Routes = [
  {
    path: '',
    component: StartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialLoginModule,
    ComponentsSharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  declarations: [StartPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StartPageModule {}
