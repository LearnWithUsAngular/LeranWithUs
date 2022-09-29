import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-password-change',
  templateUrl: './user-password-change.component.html',
  styleUrls: ['./user-password-change.component.scss']
})
export class UserPasswordChangeComponent implements OnInit {
  status = false;
  public passwordChangeForm!: FormGroup;
  public errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.passwordChangeForm = this.fb.group({
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }
  toggleMenu() {
    this.status = !this.status;
  }
  get myForm() {
    return this.passwordChangeForm.controls;
  }

  passwordChange() {
    const id: string = "6327d6c486f1f2d24efd47a9";
    const payload = {
      oldPassword: this.passwordChangeForm.controls['password'].value,
      newPassword: this.passwordChangeForm.controls['newPassword'].value,
    }
    this.authService.passwordChange(id, payload).subscribe({
      next: result => {
        if(result.success === true) {
          this.authService.logout().subscribe({
            next: result => {
              console.log(result)
              localStorage.clear();
              this.router.navigateByUrl('/login');
            },
            error: err => {
              console.log(err)
            }
          });
        }
        else{
          this.errorMsg = result.message
        }

      },
      error: err => {
        console.log(err)
      }
    })
  }

  changePasswordText() {
    if (this.passwordChangeForm.controls['newPassword'].value !== this.passwordChangeForm.controls['confirmPassword'].value) {
      this.passwordChangeForm.controls['confirmPassword'].setErrors({
        misMatch: true
      })
    }
  }
}
