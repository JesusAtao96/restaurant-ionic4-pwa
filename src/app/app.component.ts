import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        //this.statusBar.styleDefault();
        this.statusBar.styleLightContent();
        this.splashScreen.hide();
      }
      
      this.authService.authenticationState.subscribe(state => {
        //console.log('state', state);
        if (state !== null) {
          if(state) {
            this.navCtrl.navigateRoot('/main/list-restaurants');
          } else {
            this.navCtrl.navigateRoot('/start');
          }
        }
      });

    });
  }
}
