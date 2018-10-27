import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared';
import { ToastController  } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private authService: AuthenticationService,
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

  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.isLoading = false;
        console.log('response', response);
        this.authService.setToken(response);
      },
      (error) => {
        this.isLoading = false;
        console.log('Error', error);
        let { error: { err: { message } } } = error;
        this.presentToast(message);
      }
    );
  }

}
