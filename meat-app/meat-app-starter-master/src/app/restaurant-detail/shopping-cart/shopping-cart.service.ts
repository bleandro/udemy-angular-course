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
            foundItem.quantity = foundItem.quantity + 1
        else
            this.cartItems.push(new CartItem(item))
    }

    public removeItem(item: CartItem): void {
        if (item.quantity > 1)
            item.quantity = item.quantity - 1
        else
            this.cartItems.splice(this.cartItems.indexOf(item), 1)
    }

    public getTotalValue(): number {
        return this.cartItems.map(x => x.getTotalValue())
            .reduce((num1, num2) => num1 + num2, 0)
    }
}