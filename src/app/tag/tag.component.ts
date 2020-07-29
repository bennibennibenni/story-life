import { Component, OnInit } from '@angular/core';
import { TagService } from './../tag/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  TagList: any = [];
  ngOnInit() {
    this.loadTag();
  }
  constructor(public tagService: TagService) {}

  loadTag() {
    return this.tagService.GetTagsList().subscribe((data: {}) => {
      this.TagList = data;
    });
  }
}
