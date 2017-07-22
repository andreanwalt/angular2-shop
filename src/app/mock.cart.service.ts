import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Cart} from './models/model-interfaces';

export class MockCartervice {

  cart$ = new BehaviorSubject<Cart[]>([]);

  getCart() {
    return 1;
  }

  addItem(item){
    let cart = [];
    cart.push(item);
    return cart;
  }

  deleteItem(item){
    return 1;
  }

  increaseQuantity(item){
    return 1;
  }

  decreaseQuantity(item){
    return 1;
  }

  updateQuantity(item){
    return 1;
  }

  findIndexById(id) {
    return 1;
  }

  countItem(){
    return 1;
  }

  getTotal(){
    return 1;
  }

  price(){
    return 1;
  }

}
