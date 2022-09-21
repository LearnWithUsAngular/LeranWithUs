import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/must-match.validator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  confirmView: boolean = false;
  profileImage: any;
  imgFile: any;
  submitted: boolean = false;
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public location: Location,
    public userSvc: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$')]],
      confirmPwd: ['', [Validators.required, MustMatch]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      profile: ['', [Validators.required]]
    },
      {
        validator: MustMatch('password', 'confirmPwd')
      });
  }

  ngOnInit(): void {
  }

  get myForm() {
    return this.userForm.controls;
  }

  /**
  * phone number only number
  * @params event
  */
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /**
  * clear data
  */
  clearData() {
    if (this.confirmView == true) {
      this.userForm.controls['name'].enable();
      this.userForm.controls['email'].enable();
      this.userForm.controls['password'].enable();
      this.userForm.controls['confirmPwd'].enable();
      this.userForm.controls['phone'].enable();
      this.userForm.controls['profile'].enable();
      this.confirmView = false;
    } else {
      this.userForm.reset();
    }
  }

  /**
  * create user
  */
  confirmUser() {
    if (this.confirmView == true) {
      const formData = new FormData();
      formData.append('name', this.userForm.controls['name'].value);
      formData.append('email', this.userForm.controls['email'].value);
      formData.append('password', this.userForm.controls['password'].value);
      formData.append('phone', this.userForm.controls['phone'].value);
      formData.append('userProfile', this.imgFile);
      //formData.append('created_user_id', this.userInfo);

      this.userSvc.createUser(formData).subscribe((dist) => {
        this.location.back();
      })
    }

    if (this.userForm.valid) {
      this.userForm.controls['name'].disable();
      this.userForm.controls['email'].disable();
      this.userForm.controls['password'].disable();
      this.userForm.controls['confirmPwd'].disable();
      this.userForm.controls['phone'].disable();
      this.userForm.controls['profile'].disable();
      this.confirmView = true;
    }
  }

  /**
  * upload image
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
