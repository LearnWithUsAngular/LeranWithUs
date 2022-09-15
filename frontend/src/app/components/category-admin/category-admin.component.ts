import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { category } from 'src/app/constants/learn';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(category);
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }

  applyFilter(event: Event) {

  }

  createCategory() {

  }

  updateCategory(id: any) {

  }

  deleteCategory(id: any) {

  }

}
