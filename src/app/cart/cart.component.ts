import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ag-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  item = {};
  minlen = 3;

  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
    var cart = this.getCart();
     var maxLength = '10';
  }

  getCart(){
    let cart = this.cartService.getCart();
    return cart;
  }

  deleteItem(item): void {
    let c = confirm("Are you sure?")
    // accept confirm
    if(c)
      this.cartService.deleteItem(item);
  }

  increase(item): void {
    this.cartService.increaseQuantity(item);
  }

  decrease(item): void {
    this.cartService.decreaseQuantity(item);
  }

  changeQuantity(event, id): void {
    if(event.srcElement.value.length > 3)
      event.srcElement.value = 999;
    this.cartService.updateQuantity(id, event.srcElement.value);
  }

  price(){
    return this.cartService.price();
  }

}
