import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../post/post.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css'],
})
export class PostCommentComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  id: string;
  userData: any = [];

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params.postId;
      this.loadPostComment();
    });
  }

  loadPostComment() {
    return this.postService.GetPostComment(this.id).subscribe((data: {}) => {
      this.userData = data;
    });
  }
}
