// import {Component, OnDestroy, OnInit} from '@angular/core';
// import {IActivityType} from '../../../dtos';
// import {ActivatedRoute} from '@angular/router';
// import activityTypeData from '../ingredients.data';
//
// @Component({
//   selector: 'app-activity-type-details',
//   templateUrl: './ingredients-details.component.html',
//   styleUrls: ['./ingredients-details.component.css']
// })
// export class IngredientsDetailsComponent implements OnInit, OnDestroy {
//   private id: number;
//   private sub: any;
//   activityType: IActivityType;
//
//   constructor(private route: ActivatedRoute) { }
//
//   ngOnInit() {
//     this.sub = this.route.params.subscribe(params => {
//       this.id = +params['id'];
//       this.activityType = activityTypeData.find(x => x.id === this.id);
//     });
//   }
//
//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }
//
//   deleteFunc() {
//     console.log('delete works');
//   }
//
// }
