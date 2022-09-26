import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { courseList } from 'src/app/constants/learn';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit {
  sidebar: any;
  displayedColumns: string[] = ['title', 'author', 'price', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(courseList);
      this.dataSource.paginator = this.paginator;
    }, 1000);
    if (window.innerWidth < 1024) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
  @HostListener('window:resize', ['$event'])

  applyFilter(event: Event) {

  }

  createCourse() {

  }

  updateCourse(id: any) {

  }

  deleteCourse(id: any) {

  }

}
