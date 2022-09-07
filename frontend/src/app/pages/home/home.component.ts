import { Component, OnInit } from '@angular/core';
import { popular, top, cartItem, instructor } from 'src/app/constants/learn';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TooltipOptions } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  populars: any;
  tops: any;
  cartItems: any;
  instructors: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    items: 5,
    slideBy: 5,
    center: true,
    dots: false,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
  }

  myOptions: TooltipOptions = {
    placement: 'right',
    display: true,
    zIndex: 100,
    theme: 'light',
    "max-width": "280px",
    pointerEvents: 'auto',
  }

  cartOptions: TooltipOptions = {
    placement: 'bottom',
    display: true,
    zIndex: 100,
    theme: 'light',
    "max-width": "280px"
  }

  constructor() { }

  ngOnInit(): void {
    this.populars = popular;
    this.tops = top;
    this.cartItems = cartItem;
    this.instructors = instructor;
  }
}