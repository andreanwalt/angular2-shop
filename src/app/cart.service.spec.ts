import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
  /*
  describe('method getCart', () => {
    it('should return Array', () => {
      let cs = new CartService();
      let result = cs.getCart();
      expect(result).toEqual([]);
    });
  });

  describe('method decrement', () => {
    it('should return 3', () => {
      let cs = new CartService();
      let result = cs.decrement(3);
      expect(result).toEqual(3);
    });

    it("should be Error", function() {
      expect(function() {
        let cs = new CartService();
        let result = cs.decrement(4);
      }).toThrowError(Error);
    });

    it("should be return Error Message 'Invalid Argument'", function() {
      expect( function(){
        let cs = new CartService();
        let result = cs.decrement(4);
      } ).toThrow(new Error("Invalid Argument"));
    });

    it("should be return Error Message 'test 5'", function() {
      expect( function(){
        let cs = new CartService();
        let result = cs.decrement(5);
      } ).toThrow(new Error("test 5"));
    });
  });

  describe('method countItem', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.countItem();
      expect(result).toEqual(1);
    });
  });

  describe('method getTotal', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.getTotal();
      expect(result).toEqual(1);
    });
  });

  describe('method findIndexById', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.findIndexById(1);
      expect(result).toEqual(1);
    });
  });

  describe('method deleteItem', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.deleteItem(1);
      expect(result).toEqual(1);
    });
  });

  describe('method price', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.price();
      expect(result).toEqual(1);
    });
  });

  describe('method add', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let result = cs.add(1);
      expect(result).toEqual([1]);
    });
  });

  describe('method add', () => {
    it('should return 1', () => {
      let cs = new CartService();
      let item = {id:1, name:'name', description:'description'};
      let result = cs.add(item);
      //let result = ['id'];
      let val = result.length;
      expect(val).toEqual(1);
    });
  });

  describe('method add', () => {
    it('should return 2', () => {
      let cs = new CartService();
      let item = {id:1, name:'name', description:'description'};
      let result1 = cs.add(item);
      let result2 = cs.add(item);
      let val = result1.length + result2.length;
      expect(val).toEqual(2);
    });
  });
  */

});
