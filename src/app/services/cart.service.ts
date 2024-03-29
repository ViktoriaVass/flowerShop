import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlower } from '../flower-catalogue/flower.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IFlower[] = []

  constructor(private http: HttpClient) {    
    this.http.get<IFlower[]>('http://localhost:5000/cart').subscribe({
    next: (cart) => this.cart = cart,
  }); }

  getCart(): Observable<IFlower[]> {
    return this.http.get<IFlower[]>('http://localhost:5000/cart');
  }

  addFlower(flower: IFlower) {
    this.http.post('http://localhost:5000/cart', flower).subscribe(() => {
      console.log('added ' + flower.name + ' to cart!');
    });
  }

  remove(flower: IFlower) {
    console.log('Old cart:');
    console.log(this.cart);
  
    const index = this.cart.findIndex(item => item.id === flower.id);
    console.log('Filtered index:', index);
  
    if (index !== -1) {
      this.cart.splice(index, 1);
      console.log('New cart:');
      console.log(this.cart);
  
      // HTTP DELETE-Request, um das alte Cart zu löschen
      this.http.delete('http://localhost:5000/cart').subscribe(() => {
        console.log('Old cart deleted');
  
        // HTTP POST-Request, um das aktualisierte Cart-Array zu speichern
        this.http.post('http://localhost:5000/cart', this.cart).subscribe(() => {
          console.log('removed ' + flower.name + ' from cart!');
        });
      });
    } else {
      console.log('Flower not found in cart:', flower);
    }
  }
  
  
}
