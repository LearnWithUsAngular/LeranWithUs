import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { cartItem } from 'src/app/constants/learn';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { AuthService } from './services/auth.service';
import { ShareDataSvcService } from './services/share-data-svc.service';
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
  searchKey: string = '';
  searchForm!:FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
    public fb : FormBuilder,
    public shareDataSvc : ShareDataSvcService
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
    this.searchForm = this.fb.group({
      keyword: new FormControl(''),
    });
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
   * open search dialog
   */
  searchDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '300px',
      data: this.searchForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.searchForm.controls['keyword'].setValue(result);

      this.shareDataSvc.setSearchData({
        keyword: this.searchForm.controls['keyword'].value
      });

      this.router.navigate(['/search'])
    });
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
