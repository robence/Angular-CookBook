import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IIngredient} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import ingredientData from '../ingredients.data';

@Component({
  selector: 'app-ingredients-edit',
  templateUrl: './ingredients-edit.component.html',
  styleUrls: ['./ingredients-edit.component.css']
})
export class IngredientsEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  ingredient: IIngredient;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.ingredient = ingredientData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        name: [this.ingredient.name, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.ingredient = {
        id: this.ingredient.id,
        name: this.form.get('name').value
      };
      console.log(this.ingredient);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
