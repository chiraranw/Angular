import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handler',
  templateUrl: './event-handler.component.html',
  styleUrls: ['./event-handler.component.css']
})
export class EventHandlerComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  public eventHandler() { //handle click button
    console.log("Button clicked.....");
  }

}
