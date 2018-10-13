import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';
import { Events, MenuController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})

export class MenuPage implements OnInit {
  
  slotPosition = 'start';
  pages = [
    {
      name: 'Restaurantes',
      href: '/main/list-restaurants',
      icon: 'home'
    },
    {
      name: 'Valoraciones',
      href: '/main/reviews',
      icon: 'chatboxes'
    },
    {
      name: 'Perfil',
      href: '/main/profile',
      icon: 'person'
    },
    {
      name: 'Cerrar sesión',
      href: null,
      icon: 'log-out'
    },
  ];

  constructor(
    // private router: Router,
    public event: Events,
    // public storage: Storage,
    public router: Router,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
  }

  navigate(urlData) {
    if(urlData.href == null) {
      this.logout();
    }
  }

  logout() {
    this.authService.logout();
  }

}
