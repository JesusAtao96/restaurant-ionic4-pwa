import { Component, OnInit } from '@angular/core';

import { RestaurantService, RestaurantI, CommentI } from '../../shared';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  isLoading: boolean = false;
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
    this.isLoading = true;
    this.restaurantS.getCommentsXId(this.restaurantSelected).subscribe(
      (response) => {
        this.isLoading = false;
        console.log('getCommentsXId', this.restaurantSelected, this.comments);
        this.comments = response.comments;
      },
      (err) => {
        this.isLoading = false;
        console.log(err)
      }
    );
  }

}
