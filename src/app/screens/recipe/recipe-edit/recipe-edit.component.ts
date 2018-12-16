import {Component, OnDestroy, OnInit} from '@angular/core';
import {IRecipe} from '../../../dtos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import recipes from '../recipe.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  recipe: IRecipe;

  constructor( private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = recipes.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      name: [this.recipe.name, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.recipe = {
        id: this.recipe.id,
        name: this.form.get('name').value
      };
      console.log(this.recipe);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
