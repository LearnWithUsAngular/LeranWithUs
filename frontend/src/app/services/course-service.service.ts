import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, retry, subscribeOn } from 'rxjs';
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
  imgFile: any;
  vdoFile:any;

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
      language: ['English'],
      level: [''],
      courseCover: ['']
    });

    this.courseUploadForm = this.fb.group({
      courseUpload: this.fb.array([])
    });

    this.pricingPromotionForm = this.fb.group({
      currency: ['USD'],
      price: ['Free', Validators.required],
      promocode: ['']
    });
  }

  public resetForm() {
    this.courseDetailForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: [''],
      language: ['English'],
      level: [''],
      courseCover: ['']
    });

    this.courseUploadForm = this.fb.group({
      courseUpload: this.fb.array([])
    });

    this.pricingPromotionForm = this.fb.group({
      currency: ['USD'],
      price: ['Free', Validators.required],
      promocode: ['']
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

  public createCourseVideo(payload: any){
    return this.http.post(`${environment.apiUrl}/course/video`, payload, this.options);
    }


  public createCourse(payload: any) {
    return this.http.post(`${environment.apiUrl}/courses`, payload, this.options);
  }

  public deleteCourse(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/courses/` + id, this.options);
  }

  public updateCourse(payload: any,id:any) {
    return this.http.put(`${environment.apiUrl}/courses/`+id, payload, this.options);
  }

  public updateCourseVideo(payload: any,id:any) {
    return this.http.put(`${environment.apiUrl}/course/video/`+id, payload, this.options);
  }

  public findCourse(id:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/courses/` + id, this.options);
  }

  public findCourseVideo(id:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/course/video/` + id, this.options);
  }
}
