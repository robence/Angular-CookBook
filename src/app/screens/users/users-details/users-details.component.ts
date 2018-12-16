import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../../dtos';
import usersData from '../users.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  user: IUser;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.user = usersData.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }
}
