import { Injectable } from '@angular/core';
import { Products } from './models/model-interfaces';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import { CommonModule } from '@angular/common';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  getProducts(): Observable<Products[]> {
  return this.http.get('http://localhost:3000/api/products')
    .map((res: Response) => res.json());
  }


}
