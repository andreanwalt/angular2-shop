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
    //console.log(cart);
  }


  getCart(){
    let cart = this.cartService.getCart();
    //console.log('cart');
    //console.log(cart);
    return cart;
  }

  deleteItem(item){
    this.cartService.deleteItem(item);
  }

  inc(item){
    item['qty'] = 1;
    this.cartService.add(item);
  }

  dec(item){
    this.cartService.dec(item);
  }



  price(){
    let price = this.cartService.price();

    return price;
  }


    getMyTest(){
      return 1;
    }

}
