import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { instructorList } from 'src/app/constants/learn';

@Component({
  selector: 'app-instructor-admin',
  templateUrl: './instructor-admin.component.html',
  styleUrls: ['./instructor-admin.component.scss']
})
export class InstructorAdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'degree', 'gender', 'language', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(instructorList);
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }

  applyFilter(event: Event) {

  }

  createInstructor() {

  }

  updateInstructor(id: any) {

  }

  deleteInstructor(id: any) {

  }

}
