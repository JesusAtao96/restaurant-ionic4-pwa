import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppButtonComponent } from './app-button/app-button.component';
import { RatingComponent } from './rating/rating.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
    ],
    exports: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent
    ],
      declarations: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent
    ]
})

export class ComponentsSharedModule { }