import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestaurantService } from './../../../shared';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.page.html',
  styleUrls: ['./edit-restaurant.page.scss'],
})
export class EditRestaurantPage implements OnInit {

  @Input() value;
  public restaurantForm: FormGroup;
  isLoading: boolean = false;

  constructor(public modalController: ModalController, private restaurantS: RestaurantService, public fb: FormBuilder) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      capacity: [0, Validators.required],
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.restaurantS.getRestaurantXId(this.value).subscribe(
      (response) => {
        this.isLoading = false;
        //console.log('getRestaurantXId', response);
        let { name, description, address, capacity } = response.restaurant;
        this.restaurantForm.setValue({ name, description, address, capacity });
      },
      (err) => {
        this.isLoading = false;
        console.log('Error: ', err);
      }
    );
  }

  modalDismiss(isEdited) {
    this.modalController.dismiss(isEdited);
  }

  editRestaurant() {
    this.isLoading = true;
    this.restaurantS.updateRestaurant(this.value, this.restaurantForm.value).subscribe(
      (response) => {
        this.isLoading = false;
        this.modalDismiss(true);
      },
      (err) => {
        this.isLoading = false;
        console.log('Error: ', err);
      }
    );
  }

}
