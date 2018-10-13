import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  
  @Input() bgColor: string
  @Input() title: string;
  @Input() type: string = 'button';
  @Input() disabled: Boolean = false;;
  @Input() fontColor: string;
  @Input() iconName: string;
  @Input() iconSize: string;
  @Input() iconColor: string;
  
  btnStyle: Object;
  iconStyle: Object;

  constructor() { }

  ngOnInit() {
    this.btnStyle = {
      "background": this.bgColor,
      "color": this.fontColor,
      "border-width": "0px",
			"border-radius": "5px",
    }

    this.iconStyle = {
      "font-size": this.iconSize,
      "color": this.iconColor,
      "margin-left": "5px"
    }
  }

}
