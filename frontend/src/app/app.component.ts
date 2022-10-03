import { DOCUMENT } from '@angular/common';
import { Component,HostListener ,Input} from '@angular/core';
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
    this.setHeight();
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
  setHeight() {
    var headerHeight = document.getElementById('head')?.offsetHeight;
    const isMobile = matchMedia("(max-width: 767.9px)").matches;
    if(isMobile){
      document.getElementById('body')?.setAttribute("style", "margin-top:" + headerHeight + "px");
      console.log("true");
    } else {
      document.getElementById('body')?.setAttribute("style", "margin-top:0");
      console.log("false");
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event:any) {
    this.setHeight();
  }
  
}

