import { Component, Input } from '@angular/core';
import { IFlower } from '../flower-catalogue/flower.model';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent {
  @Input() flower!: IFlower;

  addToCart(flower: IFlower) {
    console.log(flower.name + ' added to cart')
    }

}
