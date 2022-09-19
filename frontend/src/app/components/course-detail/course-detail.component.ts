import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  languages = [
    { value: 'English' },
    { value: 'Myanmar' }
  ];

  levels = [
    { value: 'All Level' },
    { value: 'Beginner' },
    { value: 'Intermediate' },
    { value: 'Expert' }
  ];

  courseCover: any;
  imgFile: any;


  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public courseSvc: CourseServiceService
  ) { }

  ngOnInit(): void {
    const data = {
      childName: 'courseDetail',
      form: this.courseSvc.courseDetailForm
    }
    this.onInitEvent.emit(data);
  }

 get f(){
  return this.courseSvc.courseDetailForm.controls;
 }

  imageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgFile = file;
      const reader = new FileReader();
      reader.onload = e => this.courseCover = reader.result;
      reader.readAsDataURL(file);
    }
  }
}
