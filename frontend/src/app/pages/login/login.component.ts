import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private fb : FormBuilder,
    private authService: AuthService,
    private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.loginForm.controls;
  }

  login(){
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe((data: any) => {
        localStorage.setItem("isUserLoggedIn", "true");
        localStorage.setItem("token", data.token);
        localStorage.setItem("loginUser", JSON.stringify(data.users));
        this.router.navigate(['/home']);
      })
  }

}
