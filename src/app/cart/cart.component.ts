import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';

@Component({
  selector: 'ag-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    var cart = this.getCart();
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
    this.cartService.updateQuantity(id, event.srcElement.value);
  }

  price(){
    return this.cartService.price();
  }

}
