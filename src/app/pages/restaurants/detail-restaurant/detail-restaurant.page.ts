import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RestaurantService, RestaurantI, CommentI } from '../../../shared';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { EditRestaurantPage } from './../edit-restaurant/edit-restaurant.page';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {
  
  paramsId: String;
  restaurant: RestaurantI = {
    _id: '',
    name: '',
    description: '',
    address: '',
    capacity: null
  };
  ratingTotal: any = 0;
  commentForm: FormGroup;
  comments: CommentI[] = [];

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public fb: FormBuilder,
    private restaurantS: RestaurantService,
    public navCtrl: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController
  ) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
      rating: [0, Validators.required],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.paramsId = params['id'];
      this.getRestaurantDetail(this.paramsId);
      this.getRestaurantComments(this.paramsId);
    });
  }

  getRestaurantDetail(id) {
    this.restaurantS.getRestaurantXId(id).subscribe(
      (response) => {
        this.restaurant = response.restaurant;
        console.log('getRestaurantXId', this.restaurant);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async editRestaurant() {
    const modal = await this.modalController.create({
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
      component: EditRestaurantPage,
      componentProps: { value: this.paramsId }
    });

    modal.onDidDismiss().then(
      (response) => {
        console.log(response, 'xD');
        if(response.data) {
          this.getRestaurantDetail(this.paramsId);
        }
      }
    );

    return await modal.present();
  }


  getRestaurantComments(id) {
    this.restaurantS.getCommentsXId(id).subscribe(
      (response) => {
        this.comments = response.comments;
        console.log('getCommentsXId', this.comments);

        this.comments.forEach(comment => {
          this.ratingTotal = this.ratingTotal + comment.rating;
        });

        this.ratingTotal = Math.round(this.ratingTotal / this.comments.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  publishComment() {
    //this.commentForm.setValue({restaurant: this.paramsId});
    this.commentForm.value.restaurant = this.paramsId;
    console.log(this.commentForm.value);
    this.restaurantS.createComment(this.commentForm.value).subscribe(
      (response) => {
        this.ratingTotal = 0;
        this.getRestaurantComments(this.paramsId);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async deleteRestaurant() {
    const alert = await this.alertController.create({
      header: 'Eliminar!',
      message: '¿Estás seguro de eliminar este restaurante?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.restaurantS.deleteRestaurant(this.paramsId).subscribe(
              (response) => {
                this.navCtrl.navigateBack('/main/list-restaurants', true);
                //this.navCtrl.goBack();
              },
              (error) => {
                console.log(error);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

}
