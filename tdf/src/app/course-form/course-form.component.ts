import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  courses: { id: number, name: string }[] = [
    { "id": 1, "name": "DEV" },
    { "id": 2, "name": "DevOps" },
    { "id": 3, "name": "AWS" }
  ];


}
