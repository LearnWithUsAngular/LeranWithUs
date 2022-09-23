import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  displayedColumns: string[] = ['category', 'subcategory', 'createdAt', 'action'];
  dataSource: any;
  catrgoryList: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public router: Router,
    public categorySvc: CategoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  /**
  * get category data
  */
  getCategory() {
    this.categorySvc.getCategory().subscribe((dist) => {
      this.catrgoryList = dist.data;
      this.dataSource = new MatTableDataSource(this.catrgoryList);
      this.dataSource.paginator = this.paginator;
    })
  }

  /**
  * routing to create-category
  */
  createCategory() {
    this.router.navigate(['/create-category']);
  }

  /**
  * routing to edit-category
  * @params id
  */
  updateCategory(id: any) {
    this.router.navigate(['/edit-category/' + id]);
  }

  /**
   * delete category
   * @params data
   */
  deleteCategory(data: any) {
    const id = data._id;
    let dialogRef = this.dialog.open(DeleteCategoryComponent, {
      width: '30%',
      data: data,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.categorySvc.deleteCategory(id).subscribe((dist) => {
          this.getCategory();
        })
      }
    });
  }

}
