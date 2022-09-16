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

  onCartUpdated(event: any) {
    const id = event.target.getAttribute('id');
    const pindex = this.productItem.findIndex((elem: any) => elem.id == id);

    var pid = this.productItem[pindex].id;
    var pname = this.productItem[pindex].name;
    var pprice = this.productItem[pindex].price;
    var ptotal = this.productItem[pindex].price * 1;

    var item = { id: pid, name: pname, price: pprice, total: ptotal, quantity: 1 };

    var mycartjson = localStorage.getItem('mycart');
    if (!mycartjson) {
      this.cartItems;
    } else {
      this.cartItems = JSON.parse(mycartjson);
    }

    var status = false;
    this.cartItems.forEach(function (v: any) {
      if (id == v.id) {
        v.quantity++;
        v.total = v.price * v.quantity
        status = true;
      }
    })
    if (status == false) {
      this.cartItems.push(item);
    }
    this.updateCartTotal();

    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
  }


  updateCartTotal() {
    let total = 0;
    this.cartItems.map(elem => total = total + elem.quantity * elem.price);
    this.cartTotal = total;
  }

  onCartItemDeleted(id: any) {
    const cartdata = JSON.parse(localStorage.getItem('mycart') || '[]');
    const data = cartdata.find((elist: any) => elist['id'] == id);
    this.cartItems.splice(this.cartItems.findIndex((a: any) => a['id'] === data.id), 1);
    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
    this.updateCartTotal();
  }

  onCartItemChanged(event: any) {
    const id = event.target.getAttribute('id');
    const quantity = event.target.value;
    var status = false;
    this.cartItems.forEach(function (v: any) {
      if (id == v.id) {
        v.quantity = quantity;
        v.total = v.price * v.quantity
        status = true;
      }
    })
    localStorage.setItem('mycart', JSON.stringify(this.cartItems));
    this.updateCartTotal();
  }
}
