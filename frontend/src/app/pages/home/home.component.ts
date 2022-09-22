import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { popular, top, cartItem, instructor } from 'src/app/constants/learn';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  populars: any;
  tops: any;
  cartItems: any;
  instructors: any;
  public courseList: any = [];
  public instructorList: any = [];

  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    items: 5,
    slideBy: 5,
    center: false,
    dots: false,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
  };

  constructor(
    public courseService: CourseServiceService,
    public instructorService: InstructorService
    ) { }

  ngOnInit(): void {
    this.populars = popular;
    this.tops = top;
    this.cartItems = cartItem;
    this.instructors = instructor;
    this.getCourse();
    this.getInstructor();
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

  getCourse() {
    this.courseService.getCourses().subscribe((course: any) => {
      console.log('course', course.data);
      this.courseList = course.data;
    })
  }

  getInstructor() {
    this.instructorService.getInstructors().subscribe((instructor: any) => {
      console.log('instructor', instructor.data);
      this.instructorList = instructor.data;
    });
  }

}