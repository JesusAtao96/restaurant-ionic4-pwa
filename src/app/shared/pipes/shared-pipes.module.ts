import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse/reverse.pipe';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ReversePipe,
        FilterPipe
    ],
    exports: [
        ReversePipe,
        FilterPipe
    ]
})
export class SharedPipesModule { }
