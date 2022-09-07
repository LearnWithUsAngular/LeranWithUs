import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPwdForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPwdForm = this.fb.group({
      password: new FormControl('', Validators.required),
      confirmPwd: new FormControl('', Validators.required,)
    })
  }

  get f() {
    return this.resetPwdForm.controls;
  }

  resetPassword() {

  }

}
