import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { courseList } from 'src/app/constants/learn';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'price', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(courseList);
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }

  applyFilter(event: Event) {

  }

  createCourse() {

  }

  updateCourse(id: any) {

  }

  deleteCourse(id: any) {

  }

}
