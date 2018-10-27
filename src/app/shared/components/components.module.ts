import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppButtonComponent } from './app-button/app-button.component';
import { RatingComponent } from './rating/rating.component';
import { EmptyComponent } from './empty/empty.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
    ],
    exports: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent,
        PreloaderComponent
    ],
      declarations: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent,
        PreloaderComponent
    ]
})

export class ComponentsSharedModule { }