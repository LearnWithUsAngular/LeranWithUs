import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  sidebar: any;
  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  dataSource: any;
  userList: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public router: Router,
    public userSvc: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUser();
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
  getUser() {
    this.userSvc.getUsers().subscribe((dist) => {
      this.userList = dist.data;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
    })
  }

  /**
  * routing to create-user
  */
  createUser() {
    this.router.navigate(['/create-user']);
  }

  /**
  * routing to edit-user
  * @params id
  */
  updateUser(id: any) {
    this.router.navigate(['/edit-user/' + id]);
  }

  /**
  * delete user
  * @params data
  */
  deleteUser(data: any) {
    const id = data._id;
    let dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '30%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.userSvc.deleteUser(id).subscribe((dist) => {
          this.getUser();
        })
      }
    });
  }
}
