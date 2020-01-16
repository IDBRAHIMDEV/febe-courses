import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myCourse: string = "";
  courses: string[] = ['Learn Laravel', 'Symfony', 'Spring boot'];

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    // this.courses.unshift(this.myCourse);
    this.courses = [this.myCourse, ...this.courses];
    this.myCourse = "";
  }

  deleteCourse(index) {
   
    this.courses.splice(index, 1);
  }

}
