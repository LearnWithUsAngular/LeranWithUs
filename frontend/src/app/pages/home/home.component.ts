import { Component, OnInit } from '@angular/core';
import { popular, top, cartItem, instructor } from 'src/app/constants/learn';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    loop: false,
    autoplay: false,
    items: 5,
    slideBy: 5,
    center: false,
    dots: false,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
  }

  constructor() { }

  ngOnInit(): void {
    this.populars = popular;
    this.tops = top;
    this.cartItems = cartItem;
    this.instructors = instructor;

  }

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