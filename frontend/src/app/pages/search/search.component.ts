import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { categoryList, instructor, popular } from 'src/app/constants/learn';
import { item } from 'src/app/constants/search';
import { SearchService } from 'src/app/services/search.service';
import { ShareDataSvcService } from 'src/app/services/share-data-svc.service';
import { getAnimations } from "../search/animation";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: getAnimations()
})
export class SearchComponent implements OnInit {
  items: any = [];
  categories: any = [];
  p: number = 1;
  sidebar: any;
  populars: any = [];
  instructors: any = [];
  show = false;
  searchList:any;
  searchData :any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: false,
    dots: false,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      640: {
        items: 3,
        slideBy: 1,
      },
      1240: {
        items: 5,
        slideBy: 1,
      }
    }
  };
  featureOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    items: 1,
    slideBy: 1,
    center: true,
    dots: false,
    navSpeed: 300,
    autoHeight: true,
    autoWidth: true,
  }
  topicOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: false,
    dots: false,
    navSpeed: 30,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 2
      },
      767: {
        items: 4
      },
      1240: {
        items: 5,
      }
    }
  }
  instructorOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: false,
    dots: false,
    navSpeed: 30,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  }

  constructor(
    public route: ActivatedRoute,
    public searchSvc : SearchService,
    public shareDataSvc: ShareDataSvcService
  ) { }

  ngOnInit(): void {

    this.searchData = this.shareDataSvc.getSearchData();

    console.log( this.searchData);

    this.searchSvc.searchAll(this.searchData).subscribe((dist)=>{
      console.log(dist)
    });

    this.categories = categoryList;
    this.populars = popular;
    this.items = item;
    this.instructors = instructor;
    if (window.innerWidth < 1080) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }

  @HostListener('window:resize', ['$event'])

  onMOver(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '10';
  }
  onMOut(event: MouseEvent) {
    const card = <HTMLDivElement>event.target;
    const parent = <HTMLDivElement>card.parentElement;

    parent.style.zIndex = '0';
  }
}
