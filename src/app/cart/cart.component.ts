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

  ngOnInit() {
    var cart = this.getCart();
  }

  getCart(){
    let cart = this.cartService.getCart();
    return cart;
  }

}
