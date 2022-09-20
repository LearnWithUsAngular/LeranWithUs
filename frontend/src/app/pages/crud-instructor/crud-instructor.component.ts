import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorServiceService } from 'src/app/services/instructor-service.service';

@Component({
  selector: 'app-crud-instructor',
  templateUrl: './crud-instructor.component.html',
  styleUrls: ['./crud-instructor.component.scss']
})
export class CrudInstructorComponent implements OnInit {

  instructorCrudForm!: FormGroup;
  id: any;
  imgFile: any;
  profileImage: any;
  confirmView: boolean = false;
  buttonName: string = 'Create';
  title: string = 'Create Instructor';
  exiting: any;

  constructor(
    public instructorSvc: InstructorServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.instructorCrudForm = new FormGroup({
      instructorName: new FormControl('', Validators.required),
      headline: new FormControl('', Validators.required),
      biography: new FormControl('', Validators.required),
      instructorProfile: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.router.url.indexOf('/edit-instructor') !== -1 && this.id !== undefined) {
      this.title = 'Update Instructor';
      this.buttonName = 'Update';

      this.instructorSvc.findInstructor(this.id).subscribe((dist) => {
        this.exiting = dist.data;
        if (this.exiting) {
          this.instructorCrudForm.controls['instructorName'].setValue(this.exiting.instructorName);
          this.instructorCrudForm.controls['headline'].setValue(this.exiting.headline);
          this.instructorCrudForm.controls['biography'].setValue(this.exiting.biography);
          this.profileImage = 'http://localhost:3000/' + this.exiting.instructorProfile;
        }
      });
    }
  }

  get myForm() {
    return this.instructorCrudForm.controls;
  }

  /**
  * create instructor
  * update instructor
  */
  onSubmit() {
    if (this.confirmView == true && this.buttonName === 'Create') {
      const formData = new FormData();
      formData.append('instructorName', this.instructorCrudForm.controls['instructorName'].value);
      formData.append('headline', this.instructorCrudForm.controls['headline'].value);
      formData.append('biography', this.instructorCrudForm.controls['biography'].value);
      formData.append('instructorProfile', this.imgFile);
      // formData.append('created_user_id', this.userInfo);

      this.instructorSvc.createInstructor(formData).subscribe((dist) => {
        this.router.navigate(["instructor-list"]);
      });
    } else if (this.confirmView == true && this.buttonName === 'Update') {
      const id: string = this.activatedRoute.snapshot.params['id'];
      const formData = new FormData();
      formData.append('instructorName', this.instructorCrudForm.controls['instructorName'].value);
      formData.append('headline', this.instructorCrudForm.controls['headline'].value);
      formData.append('biography', this.instructorCrudForm.controls['biography'].value);
      this.imgFile ? formData.append('instructorProfile', this.imgFile) : "";
      // formData.append('created_user_id', this.userInfo);

      this.instructorSvc.updateInstructor(formData, id).subscribe((dist) => {
        this.router.navigate(["instructor-list"]);
      })
    }
    if (this.instructorCrudForm.valid) {
      this.instructorCrudForm.controls['instructorName'].disable();
      this.instructorCrudForm.controls['headline'].disable();
      this.instructorCrudForm.controls['biography'].disable();
      this.instructorCrudForm.controls['instructorProfile'].disable();
      this.confirmView = true;
    }

  }

  /**
  * clear button.
  */
  clearData() {
    if (this.confirmView == true) {
      this.instructorCrudForm.controls['instructorName'].enable();
      this.instructorCrudForm.controls['headline'].enable();
      this.instructorCrudForm.controls['biography'].enable();
      this.instructorCrudForm.controls['instructorProfile'].enable();
      this.confirmView = false;
    } else {
      this.instructorCrudForm.reset();
    }
  }

  /**
  * upload image
  * @param event
  */
  imageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgFile = file;
      const reader = new FileReader();
      reader.onload = e => this.profileImage = reader.result;
      reader.readAsDataURL(file);
    }
  }

}
