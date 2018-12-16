// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {IActivity, IActivityType, ILocation} from '../../../dtos';
// import activitiesData from '../recipe.data';
//
// @Component({
//   selector: 'app-activity-add',
//   templateUrl: './recipe-add.component.html',
//   styleUrls: ['./recipe-add.component.css']
// })
// export class ReceiptAddComponent implements OnInit {
//   public form: FormGroup;
//   public data: IActivity;
//   locations: ILocation[] = activitiesData.map(e => e.location);
//   ingredients: IActivityType[] = activitiesData.map(e => e.ingredient);
//
//   constructor(
//     private formBuilder: FormBuilder
//   ) { }
//
//   ngOnInit() {
//     this.createForm();
//   }
//
//   public createForm(): void {
//     this.form = this.formBuilder.group({
//       date: ['', Validators.required],
//       durationInSeconds: ['', Validators.required],
//       distanceInMeters: ['', Validators.required],
//       location: ['', Validators.required],
//       ingredient: ['', Validators.required]
//       }
//     );
//   }
//
//   public onSubmit(): void {
//     if (this.form.valid) {
//       this.data = {
//         id: 0,
//         date: this.form.get('date').value,
//         durationInSeconds: this.form.get('durationInSeconds').value,
//         distanceInMeters: this.form.get('distanceInMeters').value,
//         location: this.form.get('location').value,
//         ingredient: this.form.get('ingredient').value
//       };
//       console.log(this.data);
//     } else {
//       alert('invalid form');
//     }
//   }
//
// }
