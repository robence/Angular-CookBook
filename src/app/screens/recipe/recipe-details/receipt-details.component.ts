import {Component, OnDestroy, OnInit} from '@angular/core';
import {IRecipe} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import recipes from '../recipe.data';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  recipe: IRecipe;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = recipes.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }
}
