import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantService, RestaurantI } from '../../../shared';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants: RestaurantI[] = [];

  constructor(public navCtrl: NavController, private restaurantS: RestaurantService) {
    
  }

  ionViewDidEnter(){
    this.getRestaurants();
  }

  ngOnInit() {
  }

  getRestaurants() {
    this.restaurantS.getRestaurants().subscribe(
      (response) => {
        this.restaurants = response.restaurants;
        console.log('this.restaurants', this.restaurants)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/main/add-restaurant');
  }

}
