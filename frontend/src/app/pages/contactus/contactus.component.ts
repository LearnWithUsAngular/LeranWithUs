import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactForm!: FormGroup;
  emailSent = '';
  emailErr = '';

  constructor(
    private fb: FormBuilder,
    private contactSvc: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', Validators.required],
      address: ['']
    })
  }

  get f() {
    return this.contactForm.controls;
  }

  /** 
  * can press only number 
  */
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /** 
   * submit contact form
  */
  contactSubmit() {

    const name = this.contactForm.controls['name'].value;
    const phone = this.contactForm.controls['phone'].value;
    const address = this.contactForm.controls['address'].value;

    const params = {
      email: this.contactForm.controls['email'].value,
      subject: 'Inquery',
      message: `Name: ${name}, phone: ${phone}, address: ${address} `
    };

    this.contactSvc.contactMail(params).subscribe({
      next: result => {
        this.emailSent = "Email sent with password reset instructions.";
      },
      error: err => {
        this.emailErr = "Email does not exist.";
      }
    })
  }

}
