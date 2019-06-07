import { MenuItem } from './../menu/menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.ShoppingCartService.items
  }

  total(): number {
    return this.ShoppingCartService.totalCart()
  }

  clear(): void {
    return this.ShoppingCartService.clearCart()
  }

  removeItem(item: CartItem){
    this.ShoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem){
    this.ShoppingCartService.addItem(item)
  }

}
