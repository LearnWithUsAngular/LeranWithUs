import { Component, OnInit } from '@angular/core';
import { instructor } from 'src/app/constants/instructor';

@Component({
  selector: 'app-edit-instructor-profile',
  templateUrl: './edit-instructor-profile.component.html',
  styleUrls: ['./edit-instructor-profile.component.scss']
})
export class EditInstructorProfileComponent implements OnInit {
  instructors: any;
  constructor() { }

  ngOnInit(): void {
    this.instructors = instructor;
  }

}
