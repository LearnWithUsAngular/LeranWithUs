import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { breadcrumb,header,learn,course,content,sidebar, accordion, requirement, description, studentbuy,instructor, rate, review} from 'src/app/constants/detail';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild(MatAccordion) myaccordion!: MatAccordion;
  expanded = false;
  showaccordion = false;
  expandtxt = 'Expand all sections';
  breadcrumbnavi: any = [];
  headingtxt: any = [];
  tolearn: any = [];
  courses: any = [];
  contents: any = [];
  detailsidebar: any = [];
  accord: any = [];
  require: any = [];
  showMore = false;
  showMore1 = false;
  desc: any = [];
  buylist: any = [];
  showFull = false;
  toggleshow = "Show more";
  teacher: any;
  rating: any;
  reviewer: any = [];
  liked = false;
  unliked = false;

 
  ngOnInit(): void {
    this.breadcrumbnavi = breadcrumb;
    this.headingtxt = header;
    this.tolearn = learn;
    this.contents = content;
    this.courses = course;
    this.detailsidebar = sidebar;
    this.accord = accordion;
    this.require = requirement;
    this.desc = description;
    this.buylist = studentbuy;
    this.teacher = instructor;
    this.rating = rate;
    this.reviewer = review;
  }
  constructor(@Inject(DOCUMENT) private document: Document, public dialog: MatDialog) {
  }
  toggleAccord() {
    if (this.expanded) {
      this.expandtxt = 'Expand all sections';
      this.myaccordion.closeAll();
      this.expanded = false; 
      
    }
    else {
      this.myaccordion.openAll();
      this.expanded = true;
      this.expandtxt = 'Collapse all sections';
     
    }
  }
  showCouponForm() {
    this.detailsidebar[0].coupon = true;
  }
  showAccord() {
    if (this.showaccordion) {
      this.showaccordion = false;
    }
    else {
      this.showaccordion =true;
    }
  }
  showMoreLess(condit: string) {
    if(condit=='0' ){
    if (this.showMore) {
      this.showMore = false;
    }
    else {
      this.showMore =true;
      }
    } else {
      if (this.showMore1) {
        this.showMore1 = false;
      }
      else {
        this.showMore1 =true;
        }
    }
  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      height: '40%',
      width: '60%'
    });
  }
 
  togglelike() {
    this.liked = !this.liked;
  }
  toggleunlike() {
    this.unliked = !this.unliked;
  }
  showFullHeight() {
    if (this.showFull) {
      this.toggleshow="Show More"
    } else {
      this.toggleshow = "Show Less"
    }
    this.showFull = !this.showFull;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      console.log('end');
      this.document.getElementById('sidebar-img')?.setAttribute("style", "opacity:1;display:block");
      this.document.getElementById("sidebar")?.setAttribute("style", "position:fixed; z-index:0;top:-45%;");
    }
    else if (document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30) {
        console.log(30);
      this.document.getElementById('header')?.classList.add('appear');
      this.document.getElementById('sidebar-img')?.setAttribute("style", "opacity:0;display:none");
      this.document.getElementById("sidebar")?.setAttribute("style", "position:fixed; z-index:1;top:2%");
    }
    else if (document.body.scrollTop > 15 ||
      document.documentElement.scrollTop > 15) {
      console.log(15);
      this.document.getElementById('header')?.classList.remove('appear');
      this.document.getElementById('sidebar-img')?.setAttribute("style", "opacity:1;display:block");
      this.document.getElementById("sidebar")?.setAttribute("style", "position:absolute; z-index:0;top:15%");
    }
  }
}
@Component({
  selector: 'link-dialog',
  templateUrl: 'link-dialog.html',
  styleUrls: ['./detail.component.scss']
})
export class DialogDataExampleDialog {
  constructor(public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    onNoClick(): void {
    this.dialogRef.close();
  }
}
