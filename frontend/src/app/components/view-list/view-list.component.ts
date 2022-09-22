import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoryList, courseLists } from 'src/app/constants/learn';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  categories: any = [];
  courses: any = [];
  p: number = 1;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.categories = categoryList;
    this.courses = courseLists;
  }

  onMOver(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '10';
  }
  onMOut(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '0';
  }

}
