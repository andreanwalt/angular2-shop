import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class CartService  {

  cart = JSON.parse(localStorage.getItem('cart')) || [];
  constructor() { }

  getCart(){
    return this.cart;
  }

  addItem(item){
    console.log("CartService call addItem");
    return 1;
  }

  deleteItem(item){
    return 1;
  }

  increaseQuantity(){
    console.log("CartService call increaseQuantity");
    return 1;
  }

  decreaseQuantity(){
    console.log("CartService call decreaseQuantity");
    return 1;
  }

  updateQuantity(){
    console.log("CartService call updateQuantity");
  }

  findIndexById(id) {
    return id;
  }

  countItem(){
  }

  getTotal(){
  }

  price(){
  }

}
