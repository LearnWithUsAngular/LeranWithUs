import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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

  constructor(
    public courseSvc: CourseServiceService
  ) { }

  msgOnChildCompInit: any;

  ngOnInit(): void {
    this.courseSvc.resetForm();
  }

  onSubmit() {

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

}
