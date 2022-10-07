import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { instructor } from 'src/app/constants/instructor';

@Component({
  selector: 'app-instructor-password-change',
  templateUrl: './instructor-password-change.component.html',
  styleUrls: ['./instructor-password-change.component.scss']
})
export class InstructorPasswordChangeComponent implements OnInit {
  instructors: any;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      current_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('new_password', 'confirm_password')
    })
  }
  get myForm(){
    return this.form.controls;
  }
  
  ngOnInit(): void {
    this.instructors = instructor;
  }

}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}