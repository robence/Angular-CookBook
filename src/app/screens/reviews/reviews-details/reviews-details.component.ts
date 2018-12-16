// import {Component, OnDestroy, OnInit} from '@angular/core';
// import {IEvent} from '../../../dtos';
// import eventsData from '../reviews.data';
// import {ActivatedRoute} from '@angular/router';
//
// @Component({
//   selector: 'app-events-details',
//   templateUrl: './reviews-details.component.html',
//   styleUrls: ['./reviews-details.component.css']
// })
// export class ReviewsDetailsComponent implements OnInit, OnDestroy {
//   private id: number;
//   private sub: any;
//   event: IEvent;
//
//   constructor(private route: ActivatedRoute) {
//   }
//
//   ngOnInit() {
//     this.sub = this.route.params.subscribe(params => {
//       this.id = +params['id'];
//       this.event = eventsData.find(x => x.id === this.id);
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
// }
