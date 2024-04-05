export const GET_ALL_BLOG_POSTS = `
  query GetAllBlogPosts {
    blogPostCollection(limit: 2, order: name_ASC) {
      items {
        name
        imageUrl {
          fileName
          contentType
          url
        }
        postDescription {
          json
        }
      }
    }
  }
`;
