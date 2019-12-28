import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-panel-re-usable-component';
  totalCount: number;
  onChildNotification(value: number) {
    this.totalCount = value;
  }
}
