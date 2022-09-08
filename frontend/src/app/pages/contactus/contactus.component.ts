import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      email:[''],
      phone:[''],
      address:['']
    })
  }

  keyPress(event:any){
    
  }

  contactSubmit(){

  }

}
