import {Component, OnDestroy, OnInit} from '@angular/core';
import {IRecipe, IReview, IUser} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import reviews from '../reviews.data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reviews-edit',
  templateUrl: './reviews-edit.component.html',
  styleUrls: ['./reviews-edit.component.css']
})
export class ReviewsEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  review: IReview;
  users: IUser[] = reviews.map(e => e.user);
  recipes: IRecipe[] = reviews.map(e => e.recipe);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.review = reviews.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        rating: [this.review.rating, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.review = {
        id: this.review.id,
        rating: this.form.get('rating').value,
        user: this.review.user,
        recipe: this.review.recipe
      };
      console.log(this.review);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
