import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2, 34, 5, 7];
  total: number = 1;
  cattle: any;
  loadCattle(): any {
    this.cattle = [
      { id: 1, name: "Tomy1" },
      { id: 2, name: "Tomy2" },
      { id: 3, name: "Tomy3" }
    ];
  }

  trackById(index: number, cattle: any) {
    return cattle ? cattle.id : undefined;
  }

}
