import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output("notify") notify: EventEmitter<number> = new EventEmitter<number>();

  onClick(): void {
    this.notify.emit(21);
  }

  constructor() { }

  ngOnInit() {
  }

}
