import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/constants/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any = [];
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.blogs = blog;
  }

}
