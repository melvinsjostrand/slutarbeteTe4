import { Component } from '@angular/core';
import { PostService } from '../../service/postblog.service';
@Component({
  selector: 'app-createblog',
  standalone: true,
  imports: [],
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.scss'
})
export class CreateblogComponent {
  constructor(private postService: PostService) { }

  async onSubmit(formData: string) {
    try {
      const response = await this.postService.createPost(formData);
      console.log('Post created:', response);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
}
