import { Component, OnInit, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantService, RestaurantI } from '../../../shared';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit, AfterViewInit {

  @ViewChildren('filtered') filteredItems: QueryList<any>; // ItemComponent
  restaurantsLength = 0;
  search: string;
  isLoading = false;
  restaurants: RestaurantI[] = [];

  constructor(public navCtrl: NavController, private restaurantS: RestaurantService) {

  }

  ionViewDidEnter() {
    this.getRestaurants();
  }


  ngOnInit() { }

  ngAfterViewInit() {
      this.filteredItems.changes.subscribe((items) => {
        setTimeout(() => {
          this.restaurantsLength = items.length;
        });
     });
  }

  getRestaurants() {
    this.isLoading = true;
    this.restaurantS.getRestaurants().subscribe(
      (response) => {
        this.isLoading = false;
        this.restaurants = response.restaurants;
        console.log('this.restaurants', this.restaurants);
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }

  goToDetail(restaurantId: string) {
    console.log('goToDetail', restaurantId); // /main/detail-restaurant/{{restaurant._id}}
    this.navCtrl.navigateForward(`main/detail-restaurant/${restaurantId}`);
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/main/add-restaurant');
  }

}
