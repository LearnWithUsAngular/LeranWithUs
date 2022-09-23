import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseList:any;
  public dataSubject: any = null;

  constructor(public courseSvc:CourseServiceService) {
    this.dataSubject = this.courseSvc.dataSubject;
   }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseSvc.getCourses().subscribe((dist:any)=>{
      this.courseList = dist.data;
      this.dataSubject.next(this.courseList);
      // console.log(this.courseList)
    })
  }

}
