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

  // muss noch entfernt wrerden
  dec(item){}
  decrement(item){

    if(item === 4){
      //throw new Error('Invalid Argument');
      throw new Error("Invalid Argument");
    }

    if(item === 5){
      //throw new Error('Invalid Argument');
      throw new Error("test 5");
    }

    /*
    // holt den Warenkorb aus dem Storage
    var cart = this.getCart();
    // prüft über die Funktion finIndexbyId ob sich das Object mit der Id im Warenkorb befindet
    var id = this.findIndexById(item.id);
    // prüft ob der Wert qty im Object welches gefunden wurde größer 1 ist
    if(cart[id].qty > 1){
      // setzt den qty um 1 herunter
      cart[id].qty = cart[id].qty - 1;
      // speichert das Objet wieder im storage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    */

    return item;
  }

  countItem(){
    /*
    var count = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i = 0; i < cart.length; i++){
      count = parseInt(count.toString()) + parseInt(cart[i].qty.toString());
    }

    return count;
    */

    return 1;

  }

  getTotal(){
    /*
    var price = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i = 0; i < cart.length; i++){
      price = price + cart[i].qty * cart[i].price;
    }

    return price;
    */

    return 1;
  }

  findIndexById(id) {
    /*
      var cart = this.getCart();

      //console.log('-------');
      for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === id) {
              return i;
          }
      }
      //console.log('-------');
      return null;
    */

    return id;

  }

  deleteItem(item){
    /*
    var cart = this.getCart();

    var idx = this.findIndexById(item.id);
    if(idx !== null){
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    */

    return 1;
  }

  price(){
    /*
    var price = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i = 0; i < cart.length; i++){
      price = price + cart[i].qty * cart[i].price;
    }

    return price;
    */

    return 1;
  }

  add(item){
    this.cart = [];
    this.cart.push(item);

    /*
    this.cart = this.getCart();
    // if not in cart push
    if(this.findIndexById(item.id) == null){

     console.log('not exist');
     // füge es ins array hinzu
     this.cart.push(item);
     // speicher das array im storage
     localStorage.setItem('cart', JSON.stringify(this.cart));
     // lese das array aus dem storage
     this.cart = JSON.parse(localStorage.getItem('cart'));
     // gebe den cart in der konsole aus

     //console.log(this.cart);
    }else{
      // product aus dem Warenkorb welches schon existiert

      var idx = this.findIndexById(item.id);
      //console.log('idx: ' +idx);


      this.cart[idx].qty =  parseInt(item.qty) + parseInt(this.cart[idx].qty);
      // speicher das array im storage
      localStorage.setItem('cart', JSON.stringify(this.cart));
      //console.log(this.cart[idx]);
    }
    */

    return this.cart;


  }

  update(){
    return 1;
  }

}
