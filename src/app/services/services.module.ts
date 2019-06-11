import { OrderService } from './order.service';
import { NgModule } from '@angular/core';

import { RestaurantService } from './restaurants.service';
import { ShoppingCartService } from './shopping-cart.service';


@NgModule({
  providers: [RestaurantService, ShoppingCartService, OrderService]
})
export class ServicesModule { }
