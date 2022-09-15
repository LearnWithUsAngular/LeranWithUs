import { Component } from '@angular/core';
import { TooltipOptions } from 'ng2-tooltip-directive';
import { cartItem } from 'src/app/constants/learn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  cartItems: any;

  cartOptions: TooltipOptions = {
    placement: 'bottom',
    display: true,
    zIndex: 100,
    theme: 'light',
    "max-width": "280px"
  }

  constructor() { }

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
