import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menuitem.model";

export class ShoppingCartService {
    constructor() { }

    cartItems: CartItem[] = []

    public clear() {
        this.cartItems = []
    }

    public addItem(item: MenuItem): void {
        let foundItem = this.cartItems.find(x => x.menuItem.id === item.id)

        if (foundItem)
            this.increaseQty(foundItem)
        else
            this.cartItems.push(new CartItem(item))
    }

    public increaseQty(item: CartItem): void {
        item.quantity = item.quantity + 1
    }

    public decreaseQty(item: CartItem): void {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

    public removeItem(item: CartItem): void {
        this.cartItems.splice(this.cartItems.indexOf(item), 1)
    }

    public getTotalValue(): number {
        return this.cartItems.map(x => x.getTotalValue())
            .reduce((num1, num2) => num1 + num2, 0)
    }
}