import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import usersData from '../users.data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  user: IUser;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.user = usersData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        displayName: [this.user.displayName, Validators.required],
        email: [this.user.email, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.user = {
        id: this.user.id,
        displayName: this.form.get('displayName').value,
        email: this.form.get('email').value
      };
      console.log(this.user);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
