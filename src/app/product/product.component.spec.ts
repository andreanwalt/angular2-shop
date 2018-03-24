import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //component.product.title = "";
    var qty = 1;
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  /*
  it('should be created', () => {
    //expect(component).toBeTruthy();
  });
  */
  /* todo

  describe('method increaseQuantity', () => {
    it('should return +1', () => {
      let pc = new ProductComponent();
      let result = pc.increaseQuantity();
      this.qty = 1;
      expect(component.qty).toBe(2);
    });
  });
  */

  /*
  describe('method addCart', () => {
    it('should return []', () => {
      var item = {
        "id": 1,
        "title": "Nirvana - Nevermind",
        "description": "Album Vinyl",
        "tags": [],
        "price": 13.99,
        "qty": 22,
        "genre": "Grunge"
      };

      var result = component.getCart();
      expect(result).toEqual([]);
    });
  });
  */

  describe('method increaseQuantity', () => {
  /*  it('should return 2', () => {
      component.increaseQuantity();
      this.component.qty = 1;
      expect(component.qty).toBe(1);
    });
    */


  });

  
  describe('method decreaseQuantity', () => {
    /*
    it('should return 1 (qty = 1 > 1)', () => {
      let pc = new ProductComponent();
      let result = pc.decreaseQuantity();
      expect(result).toBe(1);
    });
    */
  });

  // create spy
  /*
  describe('describe spy', () => {
    it('should call increaseQuantity when clicked the ".dec"', () => {
      fixture = TestBed.createComponent(ProductComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });
  */



});
