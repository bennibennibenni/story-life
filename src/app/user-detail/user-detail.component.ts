import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private userDetailService: UserService
  ) {}

  id: string;
  userData: any = [];

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params.id;
      this.loadUserData();
    });
  }

  loadUserData() {
    return this.userDetailService
      .GetFullUserProfile(this.id)
      .subscribe((data: {}) => {
        this.userData = data;
      });
  }
}
