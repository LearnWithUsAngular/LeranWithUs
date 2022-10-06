import { Component, OnInit } from '@angular/core';
import { instructor } from 'src/app/constants/instructor';
@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss']
})
export class InstructorDashboardComponent implements OnInit {
  instructors: any;
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.instructors = instructor;
  }

}
