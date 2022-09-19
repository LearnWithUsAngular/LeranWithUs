import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-password-change',
  templateUrl: './user-password-change.component.html',
  styleUrls: ['./user-password-change.component.scss']
})
export class UserPasswordChangeComponent implements OnInit {

  public passwordChangeForm!: FormGroup;
  public errorMsg: string = '';
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.passwordChangeForm = this.fb.group({
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  get myForm() {
    return this.passwordChangeForm.controls;
  }

  passwordChange() {

  }

  changePasswordText() {
    if (this.passwordChangeForm.controls['newPassword'].value !== this.passwordChangeForm.controls['confirmPassword'].value) {
      this.passwordChangeForm.controls['confirmPassword'].setErrors({
        misMatch: true
      })
    }
  }
}
