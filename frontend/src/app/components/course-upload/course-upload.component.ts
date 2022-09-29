import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrls: ['./course-upload.component.scss']
})
export class CourseUploadComponent implements OnInit {

  uploadImage: any = [];
  uploadVdo: any = [];
  vdoFile: any = [];

  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() outputVideo: EventEmitter<any> = new EventEmitter();

  constructor(
    public fb: FormBuilder,
    public courseSvc: CourseServiceService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  get courseUpload(): FormArray {
    return this.courseSvc.courseUploadForm.get("courseUpload") as FormArray
  }

  newcourseUpload(): FormGroup {
    return this.fb.group({
      courseName: ['', Validators.required],
      description: [''],
      video: [''],
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    const formArr = this.courseSvc.courseUploadForm.get('courseUpload') as FormArray;
    const from = event.previousIndex;
    const to = event.currentIndex;
    this.moveItemInFormArray(formArr, from, to)
  }
  moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    const from = this.clamp(fromIndex, formArray.length - 1);
    const to = this.clamp(toIndex, formArray.length - 1);

    if (from === to) {
      return;
    }

    const previous = formArray.at(from);
    const current = formArray.at(to);
    formArray.setControl(to, previous);
    formArray.setControl(from, current);
  }

  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  ngOnInit(): void {
    const data = {
      childName: 'uploadForm',
      form: this.courseSvc.courseUploadForm,
    }
    this.onInitEvent.emit(data);

    let paramId = this.route.snapshot.paramMap.get("id");
    if (this.router.url.indexOf('/edit-course/') !== -1 && paramId !== undefined) {

      this.courseSvc.findCourse(paramId).subscribe((dist) => {

        let arr = dist.data.courseUpload[0].split(",");
        for (var i = 0; i < arr.length; i++) {
          this.courseSvc.findCourseVideo(arr[i]).subscribe((res) => {

            const mvForm = this.fb.group({
              courseName: res.data.courseName,
              description: res.data.description,
              video: null,
            });
            this.courseUpload.push(mvForm);
            this.uploadVdo.push('http://localhost:3000/' + res.data.video);
          })

        }
      })
    }
  }

  add() {
    this.courseUpload.push(this.newcourseUpload());
  }

  remove(i: number) {
    this.courseUpload.removeAt(i);
  }

  uploadIndex(index: any) {
    let upload = this.courseSvc.courseUploadForm.get('courseUpload') as FormArray;
    const formgroup = upload.controls[index] as FormGroup;
    return formgroup;
  }

  /**
   * *uploading video file
  */
  videoUpload(event: any, index: any) {
    if (event.target.files && event.target.files.length > 0) {

      if (this.vdoFile.length > index) {
        this.vdoFile[index] = event.target.files[0];
      } else {
        this.vdoFile.push(event.target.files[0]);
      }

      this.outputVideo.emit(this.vdoFile);
      const reader = new FileReader();
      reader.onload = e => this.uploadVdo[index] = (<FileReader>e.target).result;
      reader.readAsDataURL(event.target.files[0]);

    }
  }
}
