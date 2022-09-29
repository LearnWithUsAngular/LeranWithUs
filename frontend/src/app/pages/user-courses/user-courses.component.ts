import { Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.scss']
})
export class UserCoursesComponent implements OnInit {
  status = false;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public columnToDisplay = [
    'title',
    'remaintime',
    'status',
    'view',
  ];

  pageSizes = 5;
  currentPage = 0;
  totalSize = 0;
  courseList: any = [
    { title: 'JavaScript', remaintime: '8/15/2022', status: 'Pending'},
    { title: 'Vue JS', remaintime: '8/15/2022', status: 'Pending'},
    { title: 'Node JS', remaintime: '8/15/2022', status: 'Complete'},
    { title: 'Mongo DB', remaintime: '8/15/2022', status: 'Complete'},
    { title: 'Express JS', remaintime: '8/15/2022', status: 'Pending'},
    { title: 'Aangular', remaintime: '8/15/2022', status: 'Pending'},
    { title: 'Laravel', remaintime: '8/15/2022', status: 'Pending'},
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.courseList);
    this.currentPage = 0;
    this.totalSize = this.courseList.length;
  }
  toggleMenu() {
    this.status = !this.status;
  }


}
