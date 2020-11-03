import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  current = 0;
  prev = -1;
  PostList: any = [];

  constructor(public postService: PostService, private service: SharedService) {}

  ngOnInit() {
    this.service.footer.emit();
    this.loadPost();
  }

  // Request Previous Page
  onPrev() {
    if (this.current <= 0) {
      this.current = 0;
      return;
    }
    this.prev = this.current--;
    this.postService.GetPostsList(this.current).subscribe((data: {}) => {
      this.PostList = data;
    });
    window.scroll(0, 0);
  }

  // Request Next Page
  onNext() {
    this.prev = this.current++;
    this.postService.GetPostsList(this.current).subscribe((data: {}) => {
      this.PostList = data;
    });
    window.scroll(0, 0);
  }

  // Post list
  loadPost() {
    return this.postService.GetPostsList(this.current).subscribe((data) => {
      this.PostList = data;
      this.PostList.data.forEach((item) => {
        let time = item.publishDate.match(/\d\d:\d\d/);
        item.publishDate = item.publishDate.split('T')[0] + ' - ' + time;
      });
    });
  }

  // Go to Top
  goToTop() {
    window.scroll(0, 0);
  }
}
