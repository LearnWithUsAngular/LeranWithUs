import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  _id?: string;
  name?: string;
  email?: string;
  phone?: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteUserComponent,
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
