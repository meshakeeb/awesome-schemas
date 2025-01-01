export default {
  "title": "Social Media Posting",
  "description": "Schema representing a social media post. It includes details about the post's content, the author, date created, and the platform where it was shared.",
  "category": ["social-and-cultural"],
  "keywords": ["social", "cultural", "social media post", "user post", "social network", "online content", "platform", "user engagement", "social sharing"],
  "example": {
    "author": {
      "@type": "Person",
      "name": "Alice Johnson",
      "url": "https://www.example.com/authors/alice-johnson"
    },
    "dateCreated": "2024-01-01T12:00:00Z",
    "text": "Excited for the new year! Let’s make 2024 a year of growth and success!",
    "identifier": "post78901",
    "platform": {
      "@type": "SocialMediaPlatform",
      "name": "Twitter",
      "url": "https://www.twitter.com"
    },
    "url": "https://www.twitter.com/alicejohnson/status/78901",
    "upvoteCount": 102,
    "commentCount": 5,
    "shareCount": 30,
    "sameAs": [
      "https://www.instagram.com/alicejohnson",
      "https://www.linkedin.com/in/alicejohnson"
    ]
  }
}
