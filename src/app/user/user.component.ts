import { Component } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  current = 0;
  prev = -1;
  UsersList: any = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Request Previous Page
  onPrev() {
    if (this.current <= 0) {
      this.current = 0;
      return;
    }
    this.prev = this.current--;

    return this.userService.GetUsersList(this.current).subscribe((data: {}) => {
      this.UsersList = data;
    });
  }

  // Request Next Page
  onNext() {
    this.prev = this.current++;
    this.userService.GetUsersList(this.current).subscribe((data: {}) => {
      this.UsersList = data;
    });
    window.scroll(0,0);
  }

  // Users list
  loadUsers() {
    return this.userService.GetUsersList(this.current).subscribe((data: {}) => {
      this.UsersList = data;
    });
  }
}
