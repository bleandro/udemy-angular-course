import { MenuItem } from '../menu-item/menuitem.model'

export class CartItem {
    constructor(public menuItem: MenuItem,
                public quantity: number = 1) { }

    public getTotalValue(): number {
        return this.menuItem.price * this.quantity;
    }
}