import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPwdForm!: FormGroup;
  public errorMsg: string = '';
  public userId: string = '';
  public token: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.token = this.activatedRoute.snapshot.params['token'];

    this.resetPwdForm = this.fb.group({
      password: new FormControl('', Validators.required),
      confirmPwd: new FormControl('', Validators.required,)
    })
  }

  get f() {
    return this.resetPwdForm.controls;
  }

  resetPassword() {
    if (this.resetPwdForm.controls['password'].value && this.resetPwdForm.controls['confirmPwd'].value &&
      this.resetPwdForm.controls['password'].value !== this.resetPwdForm.controls['confirmPwd'].value) {
      this.errorMsg = "Password and Password confirmation are not matched";
    } else {
      const payload = {
        password: this.resetPwdForm.controls['password'].value
      }
      this.authService.resetPasswordUpdate(this.userId, this.token, payload).subscribe({
        next: result => {
          this.router.navigate(['/login', {resetEmail: 'success'}]);
        },
        error: err => {
          console.log(err);
        }
      })
    }
  }

}
