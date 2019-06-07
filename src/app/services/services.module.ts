import { NgModule } from '@angular/core';

import { RestaurantService } from './restaurants.service';
import { ShoppingCartService } from './shopping-cart.service';


@NgModule({
  providers: [RestaurantService, ShoppingCartService]
})
export class ServicesModule { }
