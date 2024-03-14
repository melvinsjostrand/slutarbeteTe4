import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../service/blog.service";
import { CommonModule } from "@angular/common";
import { bloginfo } from "../../models/bloginfo";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-blogpost",
  standalone: true,
  imports: [CommonModule,
  FormsModule],
  templateUrl: "./blogpost.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class BlogpostComponent{
  bloginfo!: bloginfo;
  newComment!: string;
  constructor(
    private route : Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const blogid = +params['id'];
      console.log('Extracted blogid:', blogid);
      if (blogid) {
        this.fetchBlogPost(blogid);
      }
    });
  }
  fetchBlogPost(blogid: number): void {
    this.blogService.fetchBlogPost(blogid)
      .subscribe((bloginfo) => {
        this.bloginfo = bloginfo; // Assuming fetchBlogPost returns a single object, not an array
        console.log(bloginfo);
      });
  }
  postComment(): void {
    if (this.newComment.trim()) {
      // Assuming you have a method in your blog service to post comments
      this.blogService.postComment(this.bloginfo.id, this.newComment).subscribe((response) => {
        console.log('Comment posted successfully:', response);
        window.location.reload();
      }, (error: any) => {
        console.error('Error posting comment:', error);
        window.location.reload();
      });
    }
  }
}
