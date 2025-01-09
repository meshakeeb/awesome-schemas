export default {
  "title": "Discussion Forum Posting",
  "description": "Schema representing a forum posting in an online discussion forum. It includes details like the posting's author, date, content, and associated discussion threads or forums.",
  "keywords": ["social-and-cultural", "social", "cultural", "discussion post", "forum thread", "online discussion", "user post", "community forum", "feedback", "discussion thread"],
  "example": {
    "author": {
      "@type": "Person",
      "name": "Jane Smith",
      "url": "https://www.example.com/authors/jane-smith"
    },
    "dateCreated": "2024-01-01T08:30:00Z",
    "text": "I agree with the points mentioned in the article, but I think there's more to consider regarding security protocols in modern web applications.",
    "discussionUrl": "https://www.example.com/forums/web-development/security-protocols",
    "inReplyTo": {
      "@type": "DiscussionForumPosting",
      "identifier": "post12345",
      "url": "https://www.example.com/forums/web-development/security-protocols/post12345"
    },
    "parentItem": {
      "@type": "DiscussionForum",
      "name": "Web Development Forum",
      "url": "https://www.example.com/forums/web-development"
    },
    "upvoteCount": 45,
    "downvoteCount": 1,
    "commentCount": 3,
    "sameAs": [
      "https://www.linkedin.com/in/jane-smith",
      "https://www.twitter.com/jane_smith"
    ]
  }
}
