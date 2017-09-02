import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Products} from './models/model-interfaces';

export class MockProductService {

  products$ = new BehaviorSubject<Products[]>([]);

  getProducts() {
    return new BehaviorSubject<Products[]>([]);
  }
}
