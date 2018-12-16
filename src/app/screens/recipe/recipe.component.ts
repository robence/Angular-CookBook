import { Component, OnInit } from '@angular/core';
import {IRecipe} from '../../dtos';
import recipes from './recipe.data';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: IRecipe[] = recipes;

  constructor() { }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }
}
