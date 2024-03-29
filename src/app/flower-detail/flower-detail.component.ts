import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlower } from '../flower-catalogue/flower.model';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent {
  @Input() flower!: IFlower;
  @Output() buy = new EventEmitter();

  addToCart(flower: IFlower) {
    this.buy.emit();
    }

}
