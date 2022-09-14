import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productItem: any = [
    { id: 1, name: 'Laptop', price: 750, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FpRKXeVbKWa1Wo75eOMva5FrE7QCREZgJj8iWNRZf9me2BcCRg' },
    { id: 2, name: 'Computer', price: 133000, imageUrl: 'http://st.motortrend.com/uploads/sites/5/2016/03/2016-Tesla-Model-X-P90D-front-three-quarter-doors-open.jpg' },
    { id: 3, name: 'Car', price: 102000, imageUrl: 'https://media.ed.edmunds-media.com/tesla/model-s/2016/oem/2016_tesla_model-s_sedan_p90d_fq_oem_2_1280.jpg' },
  ]

  cartTotal: number = 0;
  cartItems: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateCartTotal();
  }

  onCartUpdated(event: any) {
    const id = event.target.getAttribute('id');
    const pindex = this.productItem.findIndex((elem: any) => elem.id == id);
    const cindex = this.cartItems.findIndex(elem => elem.id == pindex)
    if (cindex === -1) {
      this.cartItems.push({
        id: this.productItem[pindex].id,
        name: this.productItem[pindex].name,
        quantity: 1,
        price: this.productItem[pindex].price,
        total: this.productItem[pindex].price * 1
      });
    } else {
      this.cartItems[cindex].id = this.productItem[pindex].id;
      this.cartItems[cindex].name = this.productItem[pindex].name;
      this.cartItems[cindex].quantity + 1;
      this.cartItems[cindex].price = this.productItem[pindex].price;
      this.cartItems[cindex].total = this.cartItems[cindex].price * this.cartItems[cindex].quantity;
    }
    this.updateCartTotal();
  }


  updateCartTotal() {
    let total = 0;
    this.cartItems.map(elem => total = total + elem.quantity * elem.price);
    this.cartTotal = total;
  }

  onCartItemDeleted(event: any) {
    const id = event.target.getAttribute('id');
    const index = this.cartItems.findIndex(elem => elem.id == id)
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }

  onCartItemChanged(event: any) {
    this.updateCartTotal();
  }
}
