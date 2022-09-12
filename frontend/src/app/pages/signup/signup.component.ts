import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]{8,}$')]],
        tips:['']
    });

  }

  get myForm() {
    return this.signupForm.controls;
  }
  createAcc(){
    // const payload = {
    //   name: this.signupForm.controls['username'].value,
    //   email: this.signupForm.controls['email'].value,
    //   password: this.signupForm.controls['password'].value
    // }
    // this.userService.createAccount(payload).then((dist) => {
    // })
    this.userService.createAccount({
      name: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    })
    this.router.navigate(['/login']);
  }

}
