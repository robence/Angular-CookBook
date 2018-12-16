import {Component, OnDestroy, OnInit} from '@angular/core';
import {IReview} from '../../../dtos';
import reviews from '../reviews.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class ReviewsDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  review: IReview;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.review = reviews.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }
}
