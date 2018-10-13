import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
          { path: '', redirectTo: 'listRestaurants', pathMatch: 'full' },
          { path: 'list-restaurants', loadChildren: '../restaurants/restaurants/restaurants.module#RestaurantsPageModule' },
          { path: 'add-restaurant', loadChildren: '../restaurants/add-restaurant/add-restaurant.module#AddRestaurantPageModule' },
          { path: 'detail-restaurant/:id', loadChildren: '../restaurants/detail-restaurant/detail-restaurant.module#DetailRestaurantPageModule' },
          { path: 'reviews-restaurant/:id', loadChildren: '../restaurants/reviews-restaurant/reviews-restaurant.module#ReviewsRestaurantPageModule' },
          { path: 'reviews', loadChildren: '../reviews/reviews.module#ReviewsPageModule' },
          { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
