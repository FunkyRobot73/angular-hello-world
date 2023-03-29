import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {

  lname: string;
  fname: string;

constructor() {
  this.fname = "Carlos";  //sets default fname to "Carlos"
  this.lname = "Sousa";  //sets default lname to "Sousa"
}

ngOnInit() {

}

}
