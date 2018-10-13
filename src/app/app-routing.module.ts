import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared';

const routes: Routes = [
    //{ path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', loadChildren: './public/start/start.module#StartPageModule' },
    { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
    { path: 'main', canActivate: [AuthGuardService], loadChildren: './pages/menu/menu.module#MenuPageModule' },  { path: 'reviews', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
