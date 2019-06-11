import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DeliveyCostsComponent } from './delivey-costs/delivey-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';

const ROUTES: Routes = [
  {path:'', component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveyCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES), CommonModule ]
})
export class OrderModule { }
