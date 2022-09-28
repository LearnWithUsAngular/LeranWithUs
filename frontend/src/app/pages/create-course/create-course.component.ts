import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateCourseComponent implements OnInit {

  createCourseForm!: FormGroup;
  toggleButton: Boolean = true;
  imgFile: string = "";
  vdoFile: string = "";
  arr: any = [];

  constructor(
    public courseSvc: CourseServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  msgOnChildCompInit: any;

  ngOnInit(): void {
    this.courseSvc.resetForm();
    let paramId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.router.url.indexOf('/edit-course/') !== -1 && paramId !== undefined) {
      this.toggleButton = false;
    }
  }

  /**
   * create and update course
   */
  onSubmit() {
    if (this.toggleButton == true) {
      const formData = new FormData();
      formData.append('title', this.courseSvc.createCourseForm.controls['courseDetail'].value['title']);
      formData.append('subtitle', this.courseSvc.createCourseForm.controls['courseDetail'].value['subtitle']);
      formData.append('description', this.courseSvc.createCourseForm.controls['courseDetail'].value['description']);
      formData.append('language', this.courseSvc.createCourseForm.controls['courseDetail'].value['language']);
      formData.append('level', this.courseSvc.createCourseForm.controls['courseDetail'].value['level']);
      formData.append('courseCover', this.courseSvc.imgFile);
      formData.append('currency', this.courseSvc.createCourseForm.controls['pricingForm'].value['currency']);
      formData.append('price', this.courseSvc.createCourseForm.controls['pricingForm'].value['price']);
      formData.append('promocode', this.courseSvc.createCourseForm.controls['pricingForm'].value['promocode']);

      const courseVideos = this.courseSvc.createCourseForm.controls['uploadForm'].value['courseUpload'];

      const apiArr = [];
      for (let i = 0; i < courseVideos.length; i++) {
        const videoFormData = new FormData();
        videoFormData.append('courseName', courseVideos[i].courseName);
        videoFormData.append('description', courseVideos[i].description);
        videoFormData.append('video', this.courseSvc.vdoFile[i]);
        apiArr.push(this.courseSvc.createCourseVideo(videoFormData));
      }
      forkJoin(apiArr).subscribe((dist: any) => {
        const courseUploadParam = dist.map((res: any) => res.data._id);
        formData.append('courseUpload', courseUploadParam);
        this.courseSvc.createCourse(formData).subscribe((res) => {
          this.router.navigate(['/course-admin']);
        });
      })

      // this.courseSvc.createCourseForm.reset();
    } else if (this.toggleButton == false) {
      const id: string = this.activatedRoute.snapshot.params['id'];

      const formData = new FormData();
      formData.append('title', this.courseSvc.createCourseForm.controls['courseDetail'].value['title']);
      formData.append('subtitle', this.courseSvc.createCourseForm.controls['courseDetail'].value['subtitle']);
      formData.append('description', this.courseSvc.createCourseForm.controls['courseDetail'].value['description']);
      formData.append('language', this.courseSvc.createCourseForm.controls['courseDetail'].value['language']);
      formData.append('level', this.courseSvc.createCourseForm.controls['courseDetail'].value['level']);
      this.courseSvc.imgFile ? formData.append('courseCover', this.courseSvc.imgFile) : "";
      formData.append('currency', this.courseSvc.createCourseForm.controls['pricingForm'].value['currency']);
      formData.append('price', this.courseSvc.createCourseForm.controls['pricingForm'].value['price']);
      formData.append('promocode', this.courseSvc.createCourseForm.controls['pricingForm'].value['promocode']);

      const courseVideos = this.courseSvc.createCourseForm.controls['uploadForm'].value['courseUpload'];

      const exiting = this.activatedRoute.snapshot.data['course'];
      this.arr = exiting.data.courseUpload[0].split(",");
      const apiArr = [];
      for (let i = 0; i < courseVideos.length; i++) {
        const videoFormData = new FormData();
        videoFormData.append('courseName', courseVideos[i].courseName);
        videoFormData.append('description', courseVideos[i].description);
        this.courseSvc.vdoFile[i] ? videoFormData.append('video', this.courseSvc.vdoFile[i]) : '';
        apiArr.push(this.courseSvc.updateCourseVideo(videoFormData, this.arr[i]));
      }

      forkJoin(apiArr).subscribe((dist: any) => {
        const courseUploadParam = dist.map((res: any) => res.data._id);
        formData.append('courseUpload', courseUploadParam);
        this.courseSvc.updateCourse(formData, id).subscribe((res) => {
          this.router.navigate(['/course-admin']);
        });
      })
    }
  }

  receiveAutoMsgHandler(p: any) {
    if (p.childName === 'courseDetail') {
      this.courseSvc.createCourseForm.controls['courseDetail'] = p.form
    } else if (p.childName === 'uploadForm') {
      this.courseSvc.createCourseForm.controls['uploadForm'] = p.form
    } else if (p.childName === 'pricingForm') {
      this.courseSvc.createCourseForm.controls['pricingForm'] = p.form
    }
  }

  receiveImage(img: any) {
    this.courseSvc.imgFile = img;
  }

  receiveVdo(vdo: any) {
    this.courseSvc.vdoFile = vdo;
  }

}
