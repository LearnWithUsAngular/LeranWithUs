import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  _id?: string;
  category?: string;
  createdAt?: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteCategoryComponent,
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close(null);
  }

  remove() {
    this.dialogRef.close('delete');
  }

}
