import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { subcategory } from 'src/app/constants/learn';

@Component({
  selector: 'app-subcategory-admin',
  templateUrl: './subcategory-admin.component.html',
  styleUrls: ['./subcategory-admin.component.scss']
})
export class SubcategoryAdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(subcategory);
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }

  applyFilter(event: Event) {

  }

  createSubcategory() {

  }

  updateSubcategory(id: any) {

  }

  deleteSubcategory(id: any) {

  }

}
