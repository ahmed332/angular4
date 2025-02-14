import { Component,Input } from '@angular/core';
import { Product } from '../products';
import { AddToCartService } from '../service/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
//     @Input() product!: Product;

//     constructor(private _AddToCartService: AddToCartService) {}
  
//     addToCart() {
//       this._AddToCartService.addToCart(this.product); // Input property to receive product data
//   }
}