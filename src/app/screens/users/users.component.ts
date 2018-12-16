import {Component, OnInit} from '@angular/core';
import {IUser} from '../../dtos';
import usersData from './users.data';

@Component({
  selector: 'app-locations',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = usersData;


  constructor() {
  }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }

}
