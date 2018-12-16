// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {IActivityType} from '../../../dtos';
//
// @Component({
//   selector: 'app-activity-type-add',
//   templateUrl: './ingredients-add.component.html',
//   styleUrls: ['./ingredients-add.component.css']
// })
// export class IngredientsAddComponent implements OnInit {
//   public form: FormGroup;
//   public data: IActivityType;
//
//   constructor(private formBuilder: FormBuilder) { }
//
//   ngOnInit() {
//     this.createForm();
//   }
//
//   public createForm(): void {
//     this.form = this.formBuilder.group({
//       activityTypeAddName: ['', Validators.required]
//       }
//     );
//   }
//
//   public onSubmit(): void {
//     if (this.form.valid) {
//       this.data = {
//         id: 0,
//         activityTypeName: this.form.get('activityTypeAddName').value,
//         icon: 'build'
//       };
//       console.log(this.data);
//     } else {
//       alert('invalid form');
//     }
//   }
//
// }
