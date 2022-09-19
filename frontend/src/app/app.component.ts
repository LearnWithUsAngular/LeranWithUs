import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { cartItem } from 'src/app/constants/learn';
// import { TooltipOptions } from 'ng2-tooltip-directive';

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
