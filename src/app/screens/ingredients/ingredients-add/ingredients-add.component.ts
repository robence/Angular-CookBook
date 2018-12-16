import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IIngredient} from '../../../dtos';

@Component({
  selector: 'app-activity-type-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.css']
})
export class IngredientsAddComponent implements OnInit {
  public form: FormGroup;
  public data: IIngredient;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      rating: ['', Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        id: 0,
        name: this.form.get('name').value
      };
      console.log(this.data);
    } else {
      alert('invalid form');
    }
  }

}
