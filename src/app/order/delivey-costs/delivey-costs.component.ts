import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivey-costs',
  templateUrl: './delivey-costs.component.html'
})
export class DeliveyCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
    
  }

  total(): number {
    return this.delivery + this.itemsValue
  }

}
