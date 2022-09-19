import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  profileImage: any;
  userData: any;
  public userInfo: any;

  public name!: string;
  public email!: string;
  public type!: string;
  public dob!: string;
  public address!: string;
  public phone!: string;
  public profile!: string;

  constructor(
    private router: Router,
    // private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // const id: string = this.activatedRoute.snapshot.params['id'];
    const id: string = "631b1105708ea7f5c405592a";

    this.userService.findUser(id).subscribe({
      next: result => {
        this.userData = result.data;
        if (this.userData) {
          this.name = this.userData.name;
          this.email = this.userData.email;
          this.phone = this.userData.phone;
          this.profileImage = this.userData.userProfile ? 'http://localhost:3000/' + this.userData.userProfile : "https://material.angular.io/assets/img/examples/shiba1.jpg";
        }
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
