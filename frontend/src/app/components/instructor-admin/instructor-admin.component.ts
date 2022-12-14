import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { instructorList } from 'src/app/constants/learn';
import { InstructorServiceService } from 'src/app/services/instructor-service.service';
import { DeleteInstructorComponent } from '../delete-instructor/delete-instructor.component';

@Component({
  selector: 'app-instructor-admin',
  templateUrl: './instructor-admin.component.html',
  styleUrls: ['./instructor-admin.component.scss']
})
export class InstructorAdminComponent implements OnInit {
  sidebar: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['instructorName', 'headline', 'biography', 'createdAt', 'action'];
  instructorList: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public instructorSvc: InstructorServiceService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getInstructor();
    if (window.innerWidth < 1024) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  /**
  * get instructor data
  */
  getInstructor() {
    this.instructorSvc.getInstructors().subscribe((dist) => {
      this.instructorList = dist.data;
      this.dataSource = new MatTableDataSource(this.instructorList);
      this.dataSource.paginator = this.paginator;
    })
  }

  /**
  * create instructor form
  */
  createInstructor() {
    this.router.navigate(["/create-instructor"]);
  }

  /**
  * update instructor form
  * @param id
  */
  updateInstructor(id: any) {
    this.router.navigate(['/edit-instructor/' + id]);
  }

  /**
  * delete instructor 
  * @param data
  */
  deleteInstructor(data: any) {
    const id = data._id;
    let dialogRef = this.dialog.open(DeleteInstructorComponent, {
      width: '30%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.instructorSvc.deleteInstructor(id).subscribe((dist) => {
          this.getInstructor();
        })
      }
    });
  }



}
