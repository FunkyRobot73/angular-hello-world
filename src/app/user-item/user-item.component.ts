import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() fname: string;
  // lname: string;

constructor() {
  this.fname = "";  //sets default fname to "Carlos"
  // this.lname = "Sousa";  //sets default lname to "Sousa"
}

ngOnInit() {

}

}
