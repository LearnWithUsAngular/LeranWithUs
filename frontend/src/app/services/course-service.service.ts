import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  public dataSubject : Subject<any> = new Subject();

  courseDetailForm!: FormGroup;
  courseUploadForm!: FormGroup;
  pricingPromotionForm!: FormGroup;
  createCourseForm!: FormGroup;
  token!: string;

  ngOnInit(): void {
     this.token = localStorage.getItem('token') || '';
  }
  headerOptions = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
  options = { headers: this.headerOptions };

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
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
      currency: ['USD'],
      pricing: ['', Validators.required],
      promotion: ['']
    });
  }

  public resetForm() {
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
      currency: ['USD'],
      pricing: ['', Validators.required],
      promotion: ['']
    });

    this.createCourseForm.controls['courseDetail'] = this.courseDetailForm;
    this.createCourseForm.controls['uploadForm'] = this.courseUploadForm;
    this.createCourseForm.controls['pricingForm'] = this.pricingPromotionForm;
  }

  /**
   * get course data.
   */
  public getCourses() {
    return this.http.get(`${environment.apiUrl}/courses`, this.options).pipe(retry(1));
  }
}
