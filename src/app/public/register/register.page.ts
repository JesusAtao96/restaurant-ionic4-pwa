import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared';
import { LoadingController, ToastController  } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  public loading: any;

  constructor(
    private authService: AuthenticationService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['']
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
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

  register() {
    this.presentLoading();
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response)
        this.presentToast('Registro exitoso');
        
        let { email, password } = this.registerForm.value;
        this.login({ email, password });
      },
      (error) => {
        this.loading.dismiss();
        let { error: { err: { message } } } = error;
        this.presentToast(message);
      }
    );
  }

  login(data) {
    this.authService.login(data).subscribe(
      (response) => {
        this.loading.dismiss();
        console.log('response', response);
        this.authService.setToken(response);
      },
      (error) => {
        console.log('Error', error);
        this.loading.dismiss();
        let { error: { err: { message } } } = error;
        this.presentToast(message);
      }
    );
  }

}

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
     let password = AC.get('password').value; // to get value in input tag
     let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
     if(password && confirmPassword) {
      if(password != confirmPassword) {
          console.log('false');
          AC.get('confirmPassword').setErrors( {MatchPassword: true} )
      } else {
        AC.get('confirmPassword').setErrors(null )
          return null
      }
     }
  }
}