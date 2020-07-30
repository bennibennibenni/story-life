import { Component, OnInit } from '@angular/core';
import { PostService } from './../post/post.service';
import { TagService } from './../tag/tag.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  current = 0;
  prev = -1;
  PostList: any = [];
  TagList: any = [];

  constructor(public postService: PostService, public tagService: TagService) {}

  ngOnInit() {
    this.loadPost();
    this.loadTag();
  }

  // Request Previous Page
  onPrev() {
    if (this.current <= 0) {
      this.current = 0;
      return;
    }
    this.prev = this.current--;

    return this.postService.GetPostsList(this.current).subscribe((data: {}) => {
      this.PostList = data;
    });
  }

  // Request Next Page
  onNext() {
    this.prev = this.current++;
    this.postService.GetPostsList(this.current).subscribe((data: {}) => {
      this.PostList = data;
    });
    window.scroll(0, 0);
  }

  loadTag() {
    return this.tagService.GetTagsList().subscribe((data: {}) => {
      this.TagList = data;
    });
  }
  // Post list
  loadPost() {
    return this.postService.GetPostsList(this.current).subscribe((data: {}) => {
      this.PostList = data;
    });
  }
}
