import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss']
})

@Injectable()
export class UserSidenavComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
