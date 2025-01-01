export default {
  "title": "User Review",
  "description": "Schema representing a review written by a user for a product, service, or experience. It includes the review's content, rating, and the reviewed item or service.",
  "category": ["social-and-cultural"],
  "keywords": ["social", "cultural", "user review", "product review", "service review", "rating", "customer feedback", "experience review", "review content"],
  "example": {
    "author": {
      "@type": "Person",
      "name": "John Doe",
      "url": "https://www.example.com/authors/john-doe"
    },
    "datePublished": "2024-01-01T09:00:00Z",
    "reviewBody": "I recently purchased this product and it has exceeded my expectations. The quality is top-notch and the customer service was fantastic!",
    "reviewRating": {
      "@type": "Rating",
      "bestRating": 5,
      "worstRating": 1,
      "ratingValue": 5
    },
    "itemReviewed": {
      "@type": "Product",
      "name": "Wireless Headphones",
      "url": "https://www.example.com/products/wireless-headphones"
    },
    "reviewer": {
      "@type": "Person",
      "name": "John Doe"
    },
    "sameAs": [
      "https://www.instagram.com/johndoe",
      "https://www.linkedin.com/in/johndoe"
    ]
  }
}
