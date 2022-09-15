import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { cartItem } from 'src/app/constants/learn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  cartItems: any;
  showNavBar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/login' || this.router.url === '/') {
          this.showNavBar = false;
        } else {
          this.showNavBar = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.cartItems = cartItem;
  }
}
