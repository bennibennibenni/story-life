import { Component, OnInit } from '@angular/core';
import { PostService } from './../post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  PostList: any = [];
  ngOnInit() {
    this.loadPost();
  }
  constructor(public postService: PostService) {}

  loadPost() {
    return this.postService.GetPostsList().subscribe((data: {}) => {
      this.PostList = data;
    });
  }
}
