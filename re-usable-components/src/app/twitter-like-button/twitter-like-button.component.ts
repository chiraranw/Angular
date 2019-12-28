import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twitter-like-button',
  templateUrl: './twitter-like-button.component.html',
  styleUrls: ['./twitter-like-button.component.css']
})
export class TwitterLikeButtonComponent implements OnInit {

  @Input() totalLikes: number;
  @Input() likedByUser: boolean;

  constructor() { }
  ngOnInit() {
  }

  handleClick(event: any): any {
    this.totalLikes = this.likedByUser ? this.totalLikes-- : this.totalLikes++;
    this.likedByUser = !this.likedByUser;//toggle it
  }

}
