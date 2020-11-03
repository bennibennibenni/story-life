import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

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
      this.userData.data.forEach((item) => {
        let time = item.publishDate.match(/\d\d:\d\d/);
        item.publishDate = item.publishDate.split('T')[0] + ' - ' + time;
      });
    });
  }
}
