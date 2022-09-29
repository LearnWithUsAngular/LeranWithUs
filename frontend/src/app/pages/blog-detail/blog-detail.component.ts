import { Component, OnInit } from '@angular/core';
import { blog, comment } from 'src/app/constants/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogs: any = [];
  comments: any = [];
  
  toggle = true;
  constructor() { }

  ngOnInit(): void {
    this.blogs = blog;
    this.comments = comment;
  } 
  
  enableReact() {
    this.toggle = !this.toggle;
  }
}
