import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menuitem.model';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public getItems(): CartItem[] {
    return this.shoppingCartService.cartItems
  }

  public clear(): void {
    this.shoppingCartService.clear()
  }

  public addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item)
  }

  public removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item)
  }

  public getTotalValue(): number {
    return this.shoppingCartService.getTotalValue()
  }

}
