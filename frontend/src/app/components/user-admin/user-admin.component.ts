import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { userList } from 'src/app/constants/learn';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(userList);
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }

  applyFilter(event: Event) {

  }

  createUser() {

  }

  updateUser(id: any) {

  }

  deleteUser(id: any) {

  }
}
