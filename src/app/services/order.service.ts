import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from '../order/order.model';
import { FOOD_API } from '../app.api';


@Injectable()
export class OrderService {
 
    constructor(private cartService: ShoppingCartService, private http: HttpClient){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }
    itemsValue(): number {
        return this.cartService.totalCart()
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${FOOD_API}/orders`, order)
                        .pipe(map(order => order.id))
    }

    clear() {
       this.cartService.clearCart()
    }
}