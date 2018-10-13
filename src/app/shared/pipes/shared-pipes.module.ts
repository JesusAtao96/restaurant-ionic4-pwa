import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse/reverse.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ReversePipe
    ],
    exports: [
        ReversePipe
    ]
})
export class SharedPipesModule { }
