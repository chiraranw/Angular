import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courses: string[] = ["IT", "CS", "MBS"];
  constructor(private service: CoursesService) {
    this.courses = service.courses;

  }
  ngOnInit() {
  }

}
