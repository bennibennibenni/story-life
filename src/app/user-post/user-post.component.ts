import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private userDetailService: UserService
  ) {}

  id: string;
  userData: any = [];

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params.id;
      this.loadUserPost();
    });
  }

  loadUserPost() {
    return this.userDetailService
      .GetUserPosts(this.id)
      .subscribe((data: {}) => {
        this.userData = data;
      });
  }
}
