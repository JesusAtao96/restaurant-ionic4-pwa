import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  
  @Input() numbers: Number;
  stars: Array<any> = [];


  constructor() { }

  ngOnInit() {
    for (let index = 1; index <= 5; index++) {
      if(index <= this.numbers) {
        this.stars.push({icon: 'star'});
      } else {
        this.stars.push({icon: 'star-outline'});
      }
    }
  }

}
