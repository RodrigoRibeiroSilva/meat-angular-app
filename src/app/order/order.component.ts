
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from '../services/order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
    
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  orderForm: FormGroup
  delivery: number = 8
  orderId: string

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
    
  ]

  constructor(private orderService: OrderService, 
              private router: Router) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: new FormControl('' , { validators: [Validators.required, Validators.minLength(5)]}),
      email: new FormControl('' ,[Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      number: new FormControl('', [Validators.required, Validators.pattern(this.numberPattern)]),
      paymentOptions: new FormControl('', [Validators.required]),
      optionalAddress: new FormControl('')

    }, {validators: [OrderComponent.equalsTo], updateOn: 'change'})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation) return undefined

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch: true}
    }
    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    return this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

     this.orderService.checkOrder(order)
      .pipe(tap((orderId: string) => {
        this.orderId = orderId
      }))
      .subscribe((orderId: string) => {
       this.router.navigate(['/order-summary'])
       this.orderService.clear()
     }) 
  }

  isOrderCompleted() {
    return this.orderId !== undefined
  }
}
