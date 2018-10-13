import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { AuthenticationService } from '../../shared';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  
  private user: SocialUser;
  public loginForm: any;
  public loading: any;

  constructor(
    private authService: AuthenticationService,
    public navCtrl: NavController,
    public toastController: ToastController,
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {
    /*this.socialAuthService.authState.subscribe((user) => {
      console.log('socialAuthService', user)
      this.user = user;
      this.socialAuthService.signOut();
    });*/
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login() {
    this.navCtrl.navigateForward('/login');
  }

  register() {
    this.navCtrl.navigateForward('/register');
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (response) => {
        this.authService.facebook({access_token: response.authToken}).subscribe(
          (res) => {
            console.log('res', res);
            this.authService.setToken(res);
          },
          (error) => {
            console.log('Error', error);
            let { error: { err: { message } } } = error;
            this.presentToast(message);
          }
        );
      },
      (error) => {
        console.log('Error', error);
        this.presentToast('Facebook auth error');
      }
    );
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        this.authService.google({idtoken: response.idToken}).subscribe(
          (res) => {
            console.log('res', res);
            this.authService.setToken(res);
          },
          (error) => {
            console.log('Error', error);
            let { error: { err: { message } } } = error;
            this.presentToast(message);
          }
        );
      },
      (error) => {
        console.log('Error', error)
        this.presentToast('Google auth error');
      }
    );
  }

}
