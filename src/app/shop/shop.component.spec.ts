import { TestBed, async, fakeAsync, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShopComponent } from './shop.component';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

// import services and mockservices
import { ProductService } from './../product.service';
import { MockProductService } from './../mock.product.service';

//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    // overwrite ProductService
    TestBed.overrideComponent(ShopComponent, {
      set: {
        providers: [
          { provide: ProductService, useClass: MockProductService }
        ]
      }
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should render title in a h1 tag with static text', async(() => {
    const fixture = TestBed.createComponent(ShopComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('shop works');
  }));
  */


  describe('Test MockProductService', () => {


    /*
      it("should return '2'", () => {
        let result = component.getProducts();
        expect(result).toBe(2);
      });
      */
      /*
      it("should return 'object'", () => {
        let result = component.getProducts();
        expect(result).toBe(2);
      });
      */
  });
/*
  it("should allow HTML (with async)", () => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(ShopComponent);
      fixture.autoDetectChanges(true);
      expect(fixture.nativeElement.querySelector('.panel').textContent).toContain('Content1');
    });
  });
*/


});
