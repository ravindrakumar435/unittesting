import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isLoggedIn = false;
  message: string = '';
  name: string = '';
  constructor() { }

  ngOnInit(): void {
    this.giveMessage();
  }
  

  logIn() {
    this.isLoggedIn = true;
    this.giveMessage();
  }

  giveMessage() {
    if (this.isLoggedIn) {
      this.message = 'welcome';
    } else {
      this.message = 'please log in';
    }
  }
}
