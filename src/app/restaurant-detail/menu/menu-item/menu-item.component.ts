import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() addItem = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.addItem.emit(this.menuItem)
  }

}
