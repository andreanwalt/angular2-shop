import { Component, OnInit } from '@angular/core';

import {ProductService} from './../product.service';
import {Http, Response} from '@angular/http';

import {Observable}  from 'rxjs/Observable';
import {Observer}  from 'rxjs/Observer';
import {Subscriber}  from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import {Subject}  from 'rxjs/Subject';
import {BehaviorSubject}  from 'rxjs/BehaviorSubject';

import { Products } from './../models/model-interfaces';




@Component({
  selector: 'ag-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass'],
  providers: [ProductService],
})
export class ShopComponent implements OnInit {

  // create Observable ;)
  products$: Observable<Products[]>;

  // Arbeiten mit Oberservables
  private $products: Observable<Products[]>;
  private products: Products[];


  constructor(private productService: ProductService, ) { } // private http: Http

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
