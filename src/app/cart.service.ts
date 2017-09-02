import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class CartService  {

  private cart: any[];

  constructor() { }

  getCart(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
  }

  addItem(item): void {
    console.log("CartService call addItem");
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if(this.findIndexById(item.id) === null){
     cart.push(item);
     localStorage.setItem('cart', JSON.stringify(cart));
    }else{
      var idx = this.findIndexById(item.id);
      // max qty
      if(item.qty + cart[idx].qty > 999){
        let c = confirm('Sie haben die maximale von 999 Stück dieses Artikels im Warenkorb!');
        if(c)
          cart[idx].qty = 999;
        else
          return;
      }else{
        cart[idx].qty =  item.qty + cart[idx].qty;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }

  }

  deleteItem(item): void {
    var cart = this.getCart();
    var idx = this.findIndexById(item.id);
    if(idx !== null){
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  increaseQuantity(item): void {
    console.log("CartService call increaseQuantity");
    let cart = JSON.parse(localStorage.getItem('cart'));
    var id = this.findIndexById(item.id);
    ++cart[id].qty;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  decreaseQuantity(item): void {
    console.log("CartService call decreaseQuantity");
    var cart = this.getCart();
    var id = this.findIndexById(item.id);
    if(cart[id].qty > 1){
      --cart[id].qty;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }


  updateQuantity(id, value): void {
    console.log("CartService call updateQuantity");
    let cart = JSON.parse(localStorage.getItem('cart'));
    var idx = this.findIndexById(id);
    // string to integer input type text
    cart[idx].qty = parseInt(value);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  findIndexById(id) {
    let cart = this.getCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return i;
        }
    }
    return null;
  }

  getTotal(){
  }

  price(){
    var price = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i = 0; i < cart.length; i++){
      price = price + cart[i].qty * cart[i].price;
    }

    return price;
  }

  countItem(){
    var count = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i = 0; i < cart.length; i++){
      count = parseInt(count.toString()) + parseInt(cart[i].qty.toString());
    }

    return count;
  }

}
