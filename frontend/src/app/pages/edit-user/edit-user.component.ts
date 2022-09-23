import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  confirmView: boolean = false;
  profileImage: any;
  imgFile: any;
  public userForm!: FormGroup;
  public existingUser: any;
  userData: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userSvc: UserService,
    public location: Location
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
      profile: new FormControl('')
    });
  }

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.userSvc.findUser(id).subscribe((dist) => {
      this.userData = dist.data;
      if (this.userData) {
        this.userForm.controls['name'].setValue(this.userData.name);
        this.userForm.controls['email'].setValue(this.userData.email);
        this.userForm.controls['phone'].setValue(this.userData.phone);
        this.profileImage = 'http://localhost:3000/' + this.userData.userProfile;
      }
    });
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
      this.userForm.controls['phone'].enable();
      this.userForm.controls['profile'].enable();
      this.confirmView = false;
    } else {
      this.userForm.reset();
    }
  }

  /**
  * edit user
  */
  confirmUser() {
    const id: string = this.activatedRoute.snapshot.params['id'];
    if (this.confirmView == true) {
      const formData = new FormData();
      formData.append('name', this.userForm.controls['name'].value);
      formData.append('email', this.userForm.controls['email'].value);
      formData.append('phone', this.userForm.controls['phone'].value);
      this.imgFile ? formData.append('userProfile', this.imgFile) : "";
      // formData.append('updated_user_id', this.userID);

      this.userSvc.updateUser(formData, id).subscribe((dist) => {
        this.location.back();
      })
    }
    if (this.userForm.valid) {
      this.userForm.controls['name'].disable();
      this.userForm.controls['email'].disable();
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
