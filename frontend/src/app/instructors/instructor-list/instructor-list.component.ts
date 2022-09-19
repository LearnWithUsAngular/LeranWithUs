import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteInstructorComponent } from 'src/app/components/delete-instructor/delete-instructor.component';
import { InstructorServiceService } from 'src/app/services/instructor-service.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {

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
  }

  getInstructor() {
    this.instructorSvc.getInstructors().subscribe((dist) => {
      this.instructorList = dist.data;
      this.dataSource = new MatTableDataSource(this.instructorList);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) { }

  createInstructor() {
    this.router.navigate(["/create-instructor"]);
  }

  updateInstructor(id: any) {
    console.log(id)
    this.router.navigate(['/edit-instructor/' + id]);
  }

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
