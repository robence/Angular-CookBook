import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IReview, IUser, IRecipe} from '../../../dtos';
import reviews from '../reviews.data';

@Component({
  selector: 'app-events-add',
  templateUrl: './reviews-add.component.html',
  styleUrls: ['./reviews-add.component.css']
})
export class ReviewsAddComponent implements OnInit {
  public form: FormGroup;
  public review: IReview;
  users: IUser[] = reviews.map(e => e.user);
  recipes: IRecipe[] = reviews.map(e => e.recipe);

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        rating: ['', Validators.required],
        user: ['', Validators.required],
        recipe: ['', Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.review = {
        id: 0,
        rating: this.form.get('name').value,
        user: this.form.get('user').value,
        recipe: this.form.get('recipe').value
      };
      console.log(this.review);
    } else {
      alert('invalid form');
    }
  }
}
