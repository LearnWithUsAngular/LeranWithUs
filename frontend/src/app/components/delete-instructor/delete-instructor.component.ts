import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-instructor',
  templateUrl: './delete-instructor.component.html',
  styleUrls: ['./delete-instructor.component.scss']
})
export class DeleteInstructorComponent implements OnInit {

  _id?: string;
  instructorName?: string;
  headline?: string;
  biography?: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteInstructorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteInstructorComponent,
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
