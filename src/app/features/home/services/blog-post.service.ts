import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullGraphqlApi } from '@core/api/contentfull-grapphql.service';
import { GET_ALL_BLOG_POSTS } from '@graphql/blog-post.query';

@Injectable()
export class BlogPostService {
  constructor(private contentfulGraphql: ContentfullGraphqlApi) {}

  public geBlogPosts(): Observable<unknown> {
    return this.contentfulGraphql.query(GET_ALL_BLOG_POSTS, {});
  }
}
