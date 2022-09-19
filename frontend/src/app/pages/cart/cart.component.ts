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

  async ngOnInit() {
    this.cartItems = await JSON.parse(localStorage.getItem('mycart') || '[]');
    this.updateCartTotal();
  }

  /**
   * on cart update.
   * @param event 
   */
  async onCartUpdated(event: any, index: number) {
    const id = event.target.getAttribute('id');
    var pid = this.productItem[index].id;
    var pname = this.productItem[index].name;
    var pprice = this.productItem[index].price;
    var ptotal = this.productItem[index].price * 1;

    var item = { id: pid, name: pname, price: pprice, total: ptotal, quantity: 1 };

    var mycartjson = localStorage.getItem('mycart');
    if (mycartjson) {
      this.cartItems = JSON.parse(mycartjson);
    }

    const cartIndex = this.cartItems.findIndex((data: any) => (data.id === Number(id)));
    if (cartIndex !== -1) {
      this.cartItems[cartIndex].quantity++;
      this.cartItems[cartIndex].total = this.cartItems[cartIndex].price * this.cartItems[cartIndex].quantity;
    } else {
      this.cartItems.push(item);
    }
    this.updateCartTotal();

    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
  }

  /**
   * update cart total.
   */
  updateCartTotal() {
    const result = this.cartItems.reduce(function (acc: any, elem: any) { return acc + (elem.quantity * elem.price); }, 0);
    this.cartTotal = result;
  }

  /**
   * on cart item delete.
   * @param id 
   */
  onCartItemDeleted(id: any) {
    const cartdata = JSON.parse(localStorage.getItem('mycart') || '[]');
    this.cartItems.splice(this.cartItems.findIndex((a: any) => a['id'] === Number(id)), 1);
    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
    this.updateCartTotal();
  }

  /**
   * on cart item changed.
   * @param event 
   */
  onCartItemChanged(event: any) {
    const id = event.target.getAttribute('id');
    const quantity = event.target.value;
    const cartIndex = this.cartItems.findIndex((data: any) => (data.id === Number(id)));
    if (cartIndex !== -1) {
      this.cartItems[cartIndex].quantity = quantity;
      this.cartItems[cartIndex].total = this.cartItems[cartIndex].price * this.cartItems[cartIndex].quantity
    }
    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
    this.updateCartTotal();
  }
}
