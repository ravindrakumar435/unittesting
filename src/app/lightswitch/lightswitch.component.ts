import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html',
  styleUrls: ['./lightswitch.component.scss'],
})
export class LightswitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  switchState: boolean = false;

  toggleSwitch() {
    this.switchState = !this.switchState;
  }
}
