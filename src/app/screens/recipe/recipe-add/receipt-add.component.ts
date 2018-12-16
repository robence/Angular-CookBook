import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRecipe} from '../../../dtos';

@Component({
  selector: 'app-activity-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class ReceiptAddComponent implements OnInit {
  public form: FormGroup;
  public recipe: IRecipe;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.recipe = {
        id: 0,
        name: this.form.get('name').value
      };
      console.log(this.recipe);
    } else {
      alert('invalid form');
    }
  }

}
