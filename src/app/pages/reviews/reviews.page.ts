import { Component, OnInit } from '@angular/core';

import { RestaurantService, RestaurantI, CommentI } from '../../shared';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  restaurants: RestaurantI[] = [];
  restaurantSelected: String;
  comments: CommentI[] = [];

  constructor(private restaurantS: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
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

  onChangeRestaurant() {
    this.restaurantS.getCommentsXId(this.restaurantSelected).subscribe(
      (response) => {
        console.log('getCommentsXId', this.restaurantSelected, this.comments);
        this.comments = response.comments;
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
