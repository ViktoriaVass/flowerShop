import { Component } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFlower } from './flower.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-flower-catalogue',
  templateUrl: './flower-catalogue.component.html',
  styleUrls: ['./flower-catalogue.component.scss']
})
export class FlowerCatalogueComponent {
flowers: any;
colorFilter: string = '';
nameFilter: string = '';

constructor(
  private flwrSvc: FlowerService,
  private route: ActivatedRoute,
  private cartSvc: CartService
) {}

ngOnInit() {
  this.flwrSvc.getFlowers().subscribe((flowers) => {
    this.flowers = flowers;
  });
  this.route.queryParams.subscribe((params) => {
    this.nameFilter = params['nameFilter'] ?? '';
    this.colorFilter = params['colorFilter'] ?? '';
  })
}

getFilteredList() {
  if (this.colorFilter !== '' && this.nameFilter !== '') {
    return this.flowers.filter((flower: any) => flower.color === this.colorFilter && flower.name === this.nameFilter);
  } else if (this.colorFilter !== '') {
    return this.flowers.filter((flower: any) => flower.color === this.colorFilter);
  } else if (this.nameFilter !== '') {
    return this.flowers.filter((flower: any) => flower.name === this.nameFilter);
  } else {
    return this.flowers;
  }
}

addToCart(flower: IFlower) {
  console.log("in addToCart");
  this.cartSvc.addFlower(flower);
}
}
