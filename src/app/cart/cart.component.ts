import { Component } from '@angular/core';
import  ProductsCard  from '../../../public/assets/product.json'
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products'
import { CommonModule } from '@angular/common';
import { AddToCartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartProducts : Product[] = [];

  constructor(private _AddToCartService : AddToCartService) {}

  ngOnChanges(){
    console.log()
  }

  ngOnInit() {
    this._AddToCartService.getCart().subscribe({
    next:(result) => {
    this.cartProducts = result
      console.log(this.cartProducts)
    }});
  }

  increase(id: number){
  this._AddToCartService.increaseQuantity(id)
  }

  decrease(id: number){
  this._AddToCartService.decreaseQuantity(id)
  }

  remove(id: number) {
this._AddToCartService.remove(id)
  }

  clearCart(){
    this._AddToCartService.clearCart()
  }

getOneProductTotal(product: Product): number {
return parseFloat((product.price * (product.quantity || 1)).toFixed(2));
}

getTotal(): number {
  return parseFloat(this.cartProducts.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0).toFixed(2));
}

}

