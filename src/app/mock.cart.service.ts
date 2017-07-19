import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Cart} from './models/model-interfaces';

export class MockCartervice {

  cart$ = new BehaviorSubject<Cart[]>([]);

  getCart() {
    return new BehaviorSubject<Cart[]>([]);
  }

  addItem(item){
    return new BehaviorSubject<Cart[]>([]);
  }

  deleteItem(item){
    return new BehaviorSubject<Cart[]>([]);
  }

  increaseQuantity(item){
    return new BehaviorSubject<Cart[]>([]);
  }

  decreaseQuantity(item){
    return new BehaviorSubject<Cart[]>([]);
  }

  updateQuantity(item){
    return new BehaviorSubject<Cart[]>([]);
  }

  findIndexById(id) {
    return new BehaviorSubject<Cart[]>([]);
  }

  countItem(){
    return new BehaviorSubject<Cart[]>([]);
  }

  getTotal(){
    return new BehaviorSubject<Cart[]>([]);
  }

  price(){
    return new BehaviorSubject<Cart[]>([]);
  }

}
