import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IFlower } from '../flower-catalogue/flower.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private cart: IFlower[] = [];
  gutschein: String = "";

  constructor(
    private cartSvc: CartService,
  ) {}

  ngOnInit() {
    this.cartSvc.getCart().subscribe(
      (flowersInCart) => {
        this.cart = flowersInCart;
      },
      (error) => {
        console.error('Error loading cart:', error);
      }
    )
  }

  get cartItems() {
    return this.cart;
  }

  removeFromCart(flower: IFlower) {
    console.log("in removeFromCart")
    this.cartSvc.remove(flower);
  }

  getTotalPrice() {  
    let totalPrice: number = 0;
    for (const item of this.cart) {
      totalPrice += item.price
    }
    let discountedPrice = this.getDiscount(totalPrice);
    return discountedPrice;
  }

  getDiscount(totalPrice: number) {
    let discountAmount = 0;
    switch(this.gutschein) {
      case "10rose": 
      let rosePrice = 0;
        for (const item of this.cart) {
          if(item.name === "Rose") {
            rosePrice += item.price;
          }}
          console.log('Rose discount: ' + rosePrice * 0.1)
          discountAmount = totalPrice - (rosePrice * 0.1);
          break;
      case "5alles": 
          console.log('TotalPrice discount: ' + totalPrice * 0.05)
        discountAmount = totalPrice - (totalPrice * 0.05);
        break;
      case "lieferung": 
        console.log('Lieferung discount: ' + (totalPrice - 4))
        discountAmount = totalPrice - 4;
        break;
      default: 
        discountAmount = totalPrice;
        break;
    }
    return discountAmount;
  }

}
