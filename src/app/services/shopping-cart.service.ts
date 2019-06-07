import { MenuItem } from '../restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";

export class ShoppingCartService {
 
    items: CartItem[] = []
    
    addItem(menuItem: MenuItem){
        let foundItem = this.items.find(cartItem => cartItem.menuItem.id === menuItem.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(menuItem))
        }
    }
    
    removeItem(itemCart: CartItem){
        this.items.splice(this.items.indexOf(itemCart), 1)
    }
    
    clearCart(){
        this.items = []
    }
    
    totalCart(){
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)
    }
    
    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
}