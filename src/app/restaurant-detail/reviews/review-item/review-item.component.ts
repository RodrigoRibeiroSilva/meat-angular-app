import { Component, OnInit, Input } from '@angular/core';
import { ReviewItem } from './review.model';

@Component({
  selector: 'mt-review-item',
  templateUrl: './review-item.component.html'
})
export class ReviewItemComponent implements OnInit {

  @Input() reviewItem: ReviewItem

  constructor() { }

  ngOnInit() {
  }

}
