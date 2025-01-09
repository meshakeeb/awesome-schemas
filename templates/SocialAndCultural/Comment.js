export default {
  "title": "Comment",
  "description": "Schema representing a comment on an article, blog post, or other online content. It includes the comment's text, author, date of publication, and potentially the content being commented on.",
  "keywords": ["social-and-cultural", "social", "cultural", "comment", "user feedback", "online comment", "social media comment", "discussion", "comment section", "user engagement"],
  "example": {
    "author": {
      "@type": "Person",
      "name": "John Doe",
      "url": "https://www.example.com/authors/john-doe"
    },
    "dateCreated": "2024-01-01T12:00:00Z",
    "text": "Great article! I really enjoyed the insights on modern web development.",
    "contentUrl": "https://www.example.com/articles/modern-web-development",
    "parentItem": {
      "@type": "BlogPosting",
      "name": "The Future of Web Development",
      "url": "https://www.example.com/articles/modern-web-development"
    },
    "upvoteCount": 23,
    "downvoteCount": 2,
    "sameAs": [
      "https://www.facebook.com/johndoe",
      "https://www.twitter.com/johndoe"
    ]
  }
}
