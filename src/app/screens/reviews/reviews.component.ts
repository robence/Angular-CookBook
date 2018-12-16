import { Component, OnInit } from '@angular/core';
import {IReview} from '../../dtos';
import reviews from './reviews.data';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: IReview[] = reviews;


  constructor() { }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }
}
