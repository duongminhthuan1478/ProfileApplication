import { Component, OnInit } from '@angular/core';

import { BlogPostService } from './services/blog-post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [BlogPostService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public constructor(private blogPostService: BlogPostService) {}

  public ngOnInit(): void {
    this.blogPostService.geBlogPosts().subscribe(console.log);
  }
}
