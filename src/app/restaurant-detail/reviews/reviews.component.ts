import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../../services/restaurants.service';
import { ReviewItem } from './review-item/review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<ReviewItem[]>

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.getRestaurantReviews(this.route.parent.snapshot.params['id'])
  }

}
