import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Output() outputImage: EventEmitter<any> = new EventEmitter();

  constructor(
    public courseSvc: CourseServiceService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    const data = {
      childName: 'courseDetail',
      form: this.courseSvc.courseDetailForm
    }
    this.onInitEvent.emit(data);
    let paramId = this.route.snapshot.paramMap.get("id");
    if (this.router.url.indexOf('/edit-course/') !== -1 && paramId !== undefined) {

      this.courseSvc.findCourse(paramId).subscribe((dist) => {

        this.courseSvc.courseDetailForm.controls['title'].setValue(dist.data.detail.title)
        this.courseSvc.courseDetailForm.controls['subtitle'].setValue(dist.data.detail.subtitle)
        this.courseSvc.courseDetailForm.controls['description'].setValue(dist.data.detail.description)
        this.courseSvc.courseDetailForm.controls['language'].setValue(dist.data.detail.language)
        this.courseSvc.courseDetailForm.controls['level'].setValue(dist.data.detail.level)
        this.courseCover = 'http://localhost:3000/' + dist.data.detail.courseCover;
      })
    }
  }

  get f() {
    return this.courseSvc.courseDetailForm.controls;
  }

  imageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgFile = file;
      this.outputImage.emit(this.imgFile);
      const reader = new FileReader();
      reader.onload = e => this.courseCover = reader.result;
      reader.readAsDataURL(file);
    }
  }
}
