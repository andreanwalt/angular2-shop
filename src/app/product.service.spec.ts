//import { TestBed, inject } from '@angular/core/testing';

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ProductService } from './product.service';


describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProductService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  
  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));


  describe('method getCart', () => {

    it("should return 'A'", () => {
    let ps = new ProductService();
      let result = ps.getProducts();
      expect(result.toString()).toEqual('A');
    });
  });
 

});
