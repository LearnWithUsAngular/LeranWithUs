import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { cartItem } from 'src/app/constants/learn';
import { AuthService } from './services/auth.service';
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
  isUserLoggedIn: any = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
        console.log('isUserLoggedIn', this.isUserLoggedIn);
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

  /**
   * logout the user.
   */
  logout() {
    this.authService.logout().subscribe((dist: any) => {
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('token');
      localStorage.removeItem('loginUser');
      this.authService.isLoggedIn();
      this.router.navigateByUrl('/login');
    });
  }
}
