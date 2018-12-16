import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../../dtos';
import ingredients from './ingredients.data';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: IIngredient[] = ingredients;

  constructor() { }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }
}
