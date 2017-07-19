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

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.product.title = "";
  });
  */


  it('should be created', () => {

    //expect(component).toBeTruthy();
  });

  /* todo
  describe('method increaseQuantity', () => {
    it('should return +1', () => {
      let pc = new ProductComponent();
      let result = pc.increaseQuantity();

      expect(this.qty).toBe(2);
    });
  });
  */

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
