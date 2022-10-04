import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { review } from 'src/app/constants/detail';
@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  liked = false;
  unliked = false;
  reviewer = review;
  star: any = [];
  public rating1: any;
  
  ngOnInit(): void {
    this.rating1 = 0;
  }
  
  togglelike() {
    this.liked = !this.liked;
    this.unliked = false;
  }
  toggleunlike() {
    this.unliked = !this.unliked;
    this.liked = false;
  }
  onNoClick(): void {
    this.dialog.closeAll();
  }
}
