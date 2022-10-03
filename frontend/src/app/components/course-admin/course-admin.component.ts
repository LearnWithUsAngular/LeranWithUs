import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit {

  sidebar: any;
  displayedColumns: string[] = ['title', 'subtitle', 'description', 'language', 'price', 'createdAt', 'action'];
  dataSource: any;
  public courseList: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public courseSvc: CourseServiceService,
    private dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.getCourse();
  }

  /**
  * get Courses Data
  */
  getCourse() {
    this.courseSvc.getCourses().subscribe((dist: any) => {
      this.courseList = dist.data;
      this.dataSource = new MatTableDataSource(this.courseList);
      this.dataSource.paginator = this.paginator;
    });
    if (window.innerWidth < 1024) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
  @HostListener('window:resize', ['$event'])

  applyFilter(event: Event) {

  }

  /**
  * create course
  */
  createCourse() {
    this.router.navigate(['/create-course'])
  }

  /**
  * update course
  * @params id
  */
  updateCourse(id: any) {
    this.router.navigate(['/edit-course/' + id])
  }

  /**
  * update course
  * @params data
  */
  deleteCourse(data: any) {
    const id = data._id;
    let dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '40%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.courseSvc.deleteCourse(id).subscribe((dist) => {
          this.getCourse();
        })
      }
    });
  }

}
