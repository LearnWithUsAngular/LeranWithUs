import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrls: ['./course-upload.component.scss']
})
export class CourseUploadComponent implements OnInit {

  uploadImage: any = [];
  uploadVdo:any = [];
  imgFile: any = [];

  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public fb: FormBuilder,
    public courseSvc: CourseServiceService
  ) { }

  get courseUpload(): FormArray {
    return this.courseSvc.courseUploadForm.get("courseUpload") as FormArray
  }

  newcourseUpload(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      uploadVideo: [''],
      description: [''],
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
      form: this.courseSvc.courseUploadForm
    }
    this.onInitEvent.emit(data);
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

  videoUpload(event: any, index: any){
    if (event.target.files && event.target.files.length > 0) {
      this.imgFile[index] = event.target.files[index];
      const reader = new FileReader();
      reader.onload = e => this.uploadVdo[index] = (<FileReader>e.target).result;
      reader.readAsDataURL(event.target.files[0]);
    }else{
      this.imgFile[index] = null;
      this.uploadVdo[index] = null;
    }
  }
}
