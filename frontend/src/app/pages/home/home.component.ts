import { Component, OnInit, HostListener} from '@angular/core';
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
  rate = 2;
  max = 5;
  isReadonly = false;
  populars: any;
  tops: any;
  cartItems: any;
  instructors: any;
  public courseList: any = [];
  public instructorList: any = [];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center:false,
    dots: false,
    navSpeed: 90,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        slideBy:1
      },
      750: {
        items: 2,
        slideBy:2
      },
      1280: {
        items: 4,
        slideBy:2
      }
    }
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
      this.courseList = course.data;
    })
  }

  getInstructor() {
    this.instructorService.getInstructors().subscribe((instructor: any) => {
      this.instructorList = instructor.data;
    });
  }

  
}