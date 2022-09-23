import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoryList, courseLists } from 'src/app/constants/learn';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  categories: any = [];
  p: number = 1;
  public dataSubject: any = null;
  public courses:any;

  constructor(
    public router: Router,
    public courseSvc : CourseServiceService) { 
    this.dataSubject = this.courseSvc.dataSubject;
  }

  ngOnInit(): void {
    this.categories = categoryList;
    this.dataSubject.subscribe((response :any) => {
      this.courses = response;
      console.log(response, 'response');
    });
  }

  

  onMOver(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '10';
  }
  onMOut(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '0';
  }

}
