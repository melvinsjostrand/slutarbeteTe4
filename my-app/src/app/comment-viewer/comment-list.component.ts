import { Component, OnInit } from '@angular/core'
import { CommentService } from './comment.service'
import { Comment } from './comment.interface' // Import the Comment interface

@Component({
selector: 'app-comment-list',
templateUrl: './comment-list.component.html',
styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
comments: Comment[] = [];

constructor(private commentService: CommentService) {}

ngOnInit(): void {
this.commentService.getComments().subscribe((comments) => {
this.comments = comments;
});
}
}