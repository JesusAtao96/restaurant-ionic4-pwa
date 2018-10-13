import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from './../../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileForm: FormGroup;

  constructor(private authS: AuthenticationService, public fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.profileForm.setValue({name: localStorage.getItem('name')});
  }

  editProfile() {
    localStorage.setItem('name', this.profileForm.value.name);
    //this.authS.updateUser
  }

}
