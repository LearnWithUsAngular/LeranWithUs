import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  courseDetailForm!: FormGroup;
  courseUploadForm!: FormGroup;
  pricingPromotionForm!: FormGroup;
  createCourseForm!: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.createCourseForm = this.fb.group({
      courseDetail: this.courseDetailForm,
      uploadForm: this.courseUploadForm,
      pricingForm: this.pricingPromotionForm
    });

    this.courseDetailForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: [''],
      language: ['English(US)'],
      level: [''],
      development: [''],
      subCat: [''],
      courseImg: [''],
      // promotionalVdo : ['']
    });

    this.courseUploadForm = this.fb.group({
      courseUpload: this.fb.array([])
    });

    this.pricingPromotionForm = this.fb.group({
      pricingPromotion: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  public resetForm() {
    this.courseDetailForm = this.fb.group({
      title: ['',Validators.required],
      subtitle: ['',Validators.required],
      description: [''],
      language: ['English(US)'],
      level: [''],
      development: [''],
      subCat: [''],
      courseImg: [''],
      // promotionalVdo : ['']
    });

    this.courseUploadForm = this.fb.group({
      courseUpload: this.fb.array([])
    });

    this.pricingPromotionForm = this.fb.group({
      pricingPromotion: this.fb.array([])
    });

    this.createCourseForm.controls['courseDetail'] = this.courseDetailForm;
    this.createCourseForm.controls['uploadForm'] = this.courseUploadForm;
    this.createCourseForm.controls['pricingForm'] = this.pricingPromotionForm;
  }
}
