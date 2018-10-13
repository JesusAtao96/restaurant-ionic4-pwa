import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared';
import { LoadingController, ToastController  } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public loginForm: FormGroup;
  public loading: any;

  constructor(
    private authService: AuthenticationService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]]
    });
  }

  ngOnInit() {
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Ingresando...',
      duration: 2000
    });
    return await this.loading.present();
  }

  login() {
    this.presentLoading();
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.loading.dismiss();
        console.log('response', response);
        this.authService.setToken(response);
      },
      (error) => {
        this.loading.dismiss();
        console.log('Error', error);
        let { error: { err: { message } } } = error;
        this.presentToast(message);
      }
    );
  }

}
