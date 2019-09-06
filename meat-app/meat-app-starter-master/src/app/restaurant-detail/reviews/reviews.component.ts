import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: any

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute   ) { }

  ngOnInit() {
    let id: string = this.route.parent.snapshot.params['id']

    this.reviews = this.restaurantService.getReviewsByRestaurantId(id)
  }

}
