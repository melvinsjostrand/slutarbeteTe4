import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../service/blog.service";
import { blog } from "../../models/blog.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-blogpost",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./blogpost.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class BlogpostComponent implements OnInit {
  blogs: blog[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const blogid = +params["id"];
      console.log("Current URL:", this.activatedRoute.snapshot.url);
      console.log("Extracted blogid:", blogid);
      if (blogid) {
        this.fetchBlogPost(blogid);
      }
    });
  }
  fetchBlogPost(blogid: number): void {
    this.blogService
      .fetchBlogPost(blogid)
      .then((blogPost) => {
        console.log("Fetched blog post:", blogPost);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }
}
