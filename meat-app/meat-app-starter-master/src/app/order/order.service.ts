import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {}

    itemsValue(): number {
        return this.cartService.getTotalValue()
    }

    cartItems(): CartItem[] {
        return this.cartService.cartItems
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    removeItem(item: CartItem) {
        this.cartService.removeItem(item)
    }
}